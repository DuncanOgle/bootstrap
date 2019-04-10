import Dropdown from './dropdown'

/** Test helpers */
import { getFixture, clearFixture, createEvent } from '../../tests/helpers/fixture'

describe('Dropdown', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(Dropdown.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('Default', () => {
    it('should return plugin default config', () => {
      expect(Dropdown.Default).toEqual(jasmine.any(Object))
    })
  })

  describe('DefaultType', () => {
    it('should return plugin default type config', () => {
      expect(Dropdown.DefaultType).toEqual(jasmine.any(Object))
    })
  })

  describe('data-api', () => {
    it('should not add class position-static to dropdown if boundary not set', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        expect(dropdownEl.classList.contains('position-static')).toEqual(false)
        done()
      })

      btnDropdown.click()
    })
  })
})
