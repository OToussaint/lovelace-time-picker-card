import { LitElement, TemplateResult, html, CSSResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TimeUnit } from '../models/time-unit';
import { Direction } from '../types';

/**
 * Renders an AM/PM picker.
 */
@customElement('time-unit')
export class TimeUnitComponent extends LitElement {
  static readonly EVENT_UPDATE = 'update';
  static readonly EVENT_STEP_CHANGE = 'stepChange';

  @property() private unit!: TimeUnit;

  render(): TemplateResult {
    return html`
      <div class="time-unit">
        ${this.renderStepChanger(Direction.UP)}
        <input
          class="time-input"
          type="number"
          placeholder="MM"
          min=${this.unit.minValue}
          max=${this.unit.maxValue}
          .value="${this.unit.toString()}"
          @change=${this.onInputChange}
        />
        ${this.renderStepChanger(Direction.DOWN)}
      </div>
    `;
  }

  onInputChange({ target: { value } }: { target: HTMLInputElement }): void {
    this.unit.setStringValue(value);
    const event = new CustomEvent(TimeUnitComponent.EVENT_UPDATE);
    this.dispatchEvent(event);
  }

  onStepChangerClick(direction: Direction): void {
    const event = new CustomEvent(TimeUnitComponent.EVENT_STEP_CHANGE, { detail: { direction } });
    this.dispatchEvent(event);
  }

  private renderStepChanger(direction: Direction): TemplateResult {
    return html`
      <div class="time-picker-icon" @click=${() => this.onStepChangerClick(direction)}>
        <ha-icon .icon="hass:chevron-${direction}"></ha-icon>
        <mwc-ripple id="ripple"></mwc-ripple>
      </div>
    `;
  }

static get styles(): CSSResult {
  return css`
    .time-unit {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 8px; /* Plus d'espace entre les heures et minutes */
    }
    .time-picker-icon {
      width: 30px;
      padding: 4px;
      text-align: center;
      cursor: pointer;
      color: var(--tpc-accent-color);
    }
    .time-input {
      /* Largeur augmentée pour l'effet pilule de ton image 2 */
      width: 65px; 
      height: 38px;
      padding: 0;
      background: transparent !important;
      border: 1.5px solid var(--tpc-accent-color) !important;
      /* Arrondi maximal pour la forme gélule */
      border-radius: 20px !important; 
      color: var(--primary-text-color);
      text-align: center;
      font-size: 1.3em;
      font-weight: 400;
      -moz-appearance: textfield;
    }
    .time-input:focus {
      outline: none;
    }
    .time-input::-webkit-inner-spin-button,
    .time-input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `;
}
}
