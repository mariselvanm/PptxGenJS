// Type definitions for pptxgenjs 2.3.0
// Project: https://gitbrent.github.io/PptxGenJS/
// Definitions by: Brent Ely <https://github.com/gitbrent/>
//                 Michael Beaumont <https://github.com/michaelbeaumont>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace PptxGenJS {
  const version: string;
  export type ChartType = "AREA" | "BAR" | "BUBBLE" | "DOUGHNUT" | "LINE" | "PIE" | "RADAR" | "SCATTER";
  export type JsZipOutputType = "arraybuffer" | "base64" | "binarystring" | "blob" | "nodebuffer" | "uint8array";
  export type LayoutName = "LAYOUT_4x3" | "LAYOUT_16x9" | "LAYOUT_16x10" | "LAYOUT_WIDE";
  export interface Layout {
    name: string;
    width: number;
    height: number;
  }
  export type Color = string;
  export type Coord = number | string; // string is in form 'n%'

  export interface CommonOptions {
    x?: Coord;
    y?: Coord;
    w?: Coord;
    h?: Coord;
  }
  export interface DataOrPath {
    // Exactly one must be set
    data?: string;
    path?: string;
  }
  export interface ImageOptions extends CommonOptions, DataOrPath {
    hyperlink?: string;
    rounding?: boolean;
    sizing?: "cover" | "contain" | "crop";
  }

  export interface MediaOptions extends CommonOptions, DataOrPath {
    onlineVideoLink?: string;
    type?: "audio" | "online" | "video";
  }

  export interface TextOptions extends CommonOptions, DataOrPath {
    align?: "left" | "center" | "right";
    fontSize?: number;
    color?: string;
    valign?: "top" | "middle" | "bottom";
  }

  export interface MasterSlideOptions {
    title: string;
    bkgd?: string | DataOrPath;
    objects?: Object[];
    slideNumber?: {x?: Coord, y?: Coord, color?: Color};
    margin?: number | number[];
  }

  export class Slide {
    // Slide Number methods
    getPageNumber(): string;
    slideNumber(): Object;
    slideNumber(options: Object): void;

    // Core Object API Methods
    addChart(type: ChartType, data: string, options?: Object): Slide;
    addImage(options: ImageOptions): Slide;
    addMedia(options: MediaOptions): Slide;
    addNotes(noteText: string): Slide;
    addShape(shapeName: string, options: Object): Slide;
    addTable(tableData: Array<any>, options: Object): Slide;
    addText(textString: string, options: TextOptions): Slide;
  }

  export class PptxGenJS {
    // Presentation Props
    getLayout(): string;
    setBrowser(isBrowser: boolean): void;
    setLayout(layout: LayoutName | Layout): void;
    setRTL(isRTL: boolean): void;

    // Presentation Metadata
    setAuthor(author: string): void;
    setCompany(company: string): void;
    setRevision(revision: string): void;
    setSubject(subject: string): void;
    setTitle(title: string): void;

    // Add a new Slide
    addNewSlide(masterLayoutName?: string): Slide;
    defineSlideMaster(opts: MasterSlideOptions): void;

    // Export
    save(exportFileName: string, callbackFunction?: Function, zipOutputType?: JsZipOutputType): void;
  }
}

export import * from PptxGenJS;
export default PptxGenJS.PptxGenJS;
