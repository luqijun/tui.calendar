import type Vue from 'vue';
import type Calendar from '@lqjun/calendar';

export default class VueCalendar extends Vue {
  getRootElement(): HTMLDivElement;
  getInstance(): Calendar; 
}

declare namespace tui {
  export class VueCalendar extends Vue {
    getRootElement(): HTMLDivElement;
    getInstance(): Calendar; 
  }
}
