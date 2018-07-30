import { IBsListItem } from "./ibs-list-item";

/**
 * Represents a bootstrap object with a list.
 */
export interface IBsObject {
     /**
      * The text to display on the component.
      */
     selectedText: String;
     /**
      * The list to bind to.
      */
     ddList: IBsListItem[];
}
