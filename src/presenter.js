import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import CreatePointFormView from './view/create-point-form-view.js';
import EditPointFormView from './view/edit-point-form-view.js';
import PointView from './view/point-view.js';
import EmptyListView from './view/empty-list-view.js'; // Добавлен новый компонент
import { render } from './framework/render.js';

export default class MainPresenter {
  #filtersContainer = null;
  #eventsContainer = null;

  constructor() {
    this.#filtersContainer = document.querySelector('.trip-controls__filters');
    this.#eventsContainer = document.querySelector('.trip-events');
  }

  init() {
    this.#renderComponents();
  }

  #renderComponents() {
    // Отрисовка фильтров
    render(new FiltersView().element, this.#filtersContainer);

    // Создаем контейнер для сортировки и списка событий
    const eventsContent = document.createElement('div');
    
    // Отрисовка сортировки
    render(new SortView().element, eventsContent);
    
    // Отрисовка в списке событий
    const eventsList = document.createElement('div');
    eventsList.classList.add('trip-events__list');
    
    // Форма редактирования (первая)
    render(new EditPointFormView().element, eventsList);
    
    // Форма создания
    render(new CreatePointFormView().element, eventsList);
    
    // 3 точки маршрута
    for (let i = 0; i < 3; i++) {
      render(new PointView().element, eventsList);
    }
    
    // Для пустого списка:
    // render(new EmptyListView().element, eventsContent);
    
    eventsContent.appendChild(eventsList);
    this.#eventsContainer.appendChild(eventsContent);
  }
}