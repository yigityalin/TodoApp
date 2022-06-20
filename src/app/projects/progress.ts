import {DateUtils} from "../shared/date";

export class Progress {
  private readonly _start: Date;
  private _end: Date | null;

  constructor(start: Date, end: Date | null = null) {
    this._start = start;
    this._end = end;
  }

  public get start(): string {
    return DateUtils.dateToString(this._start);
  }

  public get end(): string {
    if (this._end === null) {
      return "Present";
    } else {
      return DateUtils.dateToString(this._end);
    }
  }

  public complete(): void {
    if (this.isCompleted) {
      throw Error("This project is already over");
    } else if (confirm("Are you sure to complete this project?")) {
      this._end = new Date();
    }
  }

  public get isCompleted(): boolean {
    return this._end !== null;
  }
}
