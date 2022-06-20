import {DateUtils} from "../shared/date";

export class Project {
  private _name: string;
  private _start: Date;
  private _end: Date | null;

  constructor(name: string, start: Date) {
    this._name = name;
    this._start = start;
    this._end = null;
  }

  public get name() {
    return this._name;
  }

  public get start() {
    return DateUtils.dateToString(this._start);
  }

  public get end() {
    if (this._end === null) {
      return "Present";
    } else {
      return DateUtils.dateToString(this._end);
    }
  }
}
