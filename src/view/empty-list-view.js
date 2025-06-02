export default class EmptyListView {
  #element = null;

  constructor() {
    this.#element = this.#createElement();
  }

  get element() {
    return this.#element;
  }

  #createElement() {
    const element = document.createElement('div');
    element.innerHTML = this.#getTemplate();
    return element.firstElementChild;
  }

  #getTemplate() {
    return `
      <p class="trip-events__msg">Click New Event to create your first point</p>
    `;
  }
}