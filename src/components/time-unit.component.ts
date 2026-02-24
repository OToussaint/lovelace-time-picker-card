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
        /* default padding merged from user's card_mod (can be overridden via CSS variables or card_mod) */
        padding: var(--tpc-time-unit-padding, 5px);
      }

      .time-picker-icon {
        width: 30px;
        padding: var(--tpc-control-padding);
        text-align: center;
        cursor: pointer;
        /* prefer switch-checked color when present, otherwise fall back to tpc-icon-color */
        color: var(--switch-checked-button-color, var(--tpc-icon-color));
      }

      .time-input {
        /* default width increased to match user's preference; overridable via --tpc-time-input-width */
        width: var(--tpc-time-input-width, 50px);
        padding: var(--tpc-control-padding);
        background: var(--tpc-elements-background-color);
        /* merged styles from user's card_mod */
        border: 1px solid var(--tpc-time-input-border-color, var(--switch-checked-button-color));
        background-color: var(--tpc-time-input-background, rgba(0,0,0,0));
        color: var(--tpc-time-input-color, var(--primary-text-color, #fff));
        border-radius: var(--tpc-time-input-radius, 7px);
        margin: var(--tpc-time-input-margin, -10px);
        /* fixed height to match user's expectation (default 23px); overridable via --tpc-time-input-height */
        height: var(--tpc-time-input-height, 23px);
        box-sizing: border-box;
        text-align: center;
        font-size: 1em;
        -moz-appearance: textfield;

        transition: border-color 0.2s ease-in-out;
      }

      .time-input:focus {
        outline: none;
      }

      .time-input:invalid {
        box-shadow: none;
        outline: none;
        border: 0;
        border-bottom: 2px solid red;
      }

      .time-input::-webkit-inner-spin-button,
      .time-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `;
  }
}