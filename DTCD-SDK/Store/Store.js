import { cloneDeep } from './functions';

class Store {
  #state;

  #actions = {};
  #cbsOfActionSubscribers = [];

  #mutations = {};
  #cbsOfMutationSubscribers = [];

  #getters = {};

  constructor(options) {
    const {
      state,
      actions,
      mutations,
      getters,
    } = options;

    // обработка поля 'state'
    if (typeof state === 'function') {
      const funcStateResult = state();
      this.#state = typeof funcStateResult === 'object' ? funcStateResult : {};
    } else if (typeof state === 'object') {
      this.#state = state;
    }

    // обработка поля 'actions'
    if (typeof actions === 'object') {
      for (const nameOfAction in actions) {
        if (Object.hasOwnProperty.call(actions, nameOfAction)) {
          const action = actions[nameOfAction];
          if (typeof action === 'function') {
            this.#actions[nameOfAction] = action;
          }
        }
      }
    }

    // обработка поля 'mutations'
    if (typeof mutations === 'object') {
      for (const nameOfMutation in mutations) {
        if (Object.hasOwnProperty.call(mutations, nameOfMutation)) {
          const mutation = mutations[nameOfMutation];
          if (typeof mutation === 'function') {
            this.#mutations[nameOfMutation] = mutation;
          }
        }
      }
    }

    // обработка поля 'getters'
    if (typeof getters === 'object') {
      for (const getterName in getters) {
        if (Object.hasOwnProperty.call(getters, getterName)) {
          const getter = getters[getterName];
          if (typeof getter === 'function') {
            const thisStore = this;
            Object.defineProperty(this.#getters, getterName, {
              get() {
                return getter(thisStore.state);
              },
            });
          }
        }
      }
    }
  }

  get state() {
    return cloneDeep(this.#state);
  }

  get getters() {
    return this.#getters;
  }

  commit(arg1, arg2) {
    let typeOfMutation = '';
    let payload;

    if (typeof arg1 === 'string') {
      typeOfMutation = arg1;
      payload = arg2;
    }
    if (typeof arg1 === 'object') {
      typeOfMutation = typeof arg1.type === 'string' ? arg1.type : '';
      payload = arg1;
    }

    if (!typeOfMutation) return;

    if (typeof this.#mutations[typeOfMutation] === 'function') {
      this.#mutations[typeOfMutation](this.#state, payload);
      this.#dispatchMutationSubscribers({
        type: typeOfMutation,
        payload,
      });
    }
  }

  dispatch(arg1, arg2) {
    let nameOfAction = '';
    let payload;

    if (typeof arg1 === 'string') {
      nameOfAction = arg1;
      payload = arg2;
    }
    if (typeof arg1 === 'object') {
      nameOfAction = typeof arg1.type === 'string' ? arg1.type : '';
      payload = arg1;
    }

    if (!nameOfAction) return;

    if (typeof this.#actions[nameOfAction] === 'function') {
      this.#dispatchActionSubscribers({
        type: nameOfAction,
        payload,
      });
      this.#actions[nameOfAction](this, payload);
    }
  }

  subscribe(handler, options = {}) {
    if (typeof handler !== 'function') return;

    if (options.prepend) {
      this.#cbsOfMutationSubscribers.unshift(handler);
    } else {
      this.#cbsOfMutationSubscribers.push(handler);
    }

    const unsubscribe = () => {
      this.#cbsOfMutationSubscribers = this.#cbsOfMutationSubscribers.filter((callbackItem) => {
        if (callbackItem === handler) return false;
      });
    }

    return unsubscribe;
  }

  subscribeAction(handler, options = {}) {
    if (typeof handler !== 'function') return;

    if (options.prepend) {
      this.#cbsOfActionSubscribers.unshift(handler);
    } else {
      this.#cbsOfActionSubscribers.push(handler);
    }

    const unsubscribe = () => {
      this.#cbsOfActionSubscribers = this.#cbsOfActionSubscribers.filter((callbackItem) => {
        if (callbackItem === handler) return false;
      });
    }

    return unsubscribe;
  }

  #dispatchMutationSubscribers(mutation) {
    this.#cbsOfMutationSubscribers.forEach((callbackItem) => {
      callbackItem(mutation, this.state);
    });
  }

  #dispatchActionSubscribers(action) {
    this.#cbsOfActionSubscribers.forEach((callbackItem) => {
      callbackItem(action, this.state);
    });
  }
}

function createStore(options) {
  const store = new Store(options);
  return store;
}

export {
  createStore,
};
