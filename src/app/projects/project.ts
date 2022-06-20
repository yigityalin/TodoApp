import {DateUtils} from "../shared/date";

export class Project {
  private _name: string;
  private _start: Date;
  private _end: Date | null = null;

  constructor(name: string, start: Date) {
    this._name = name;
    this._start = start;
  }

  public get name(): string {
    return this._name;
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
    if (this.isCompleted()) {
      throw Error("This project is already over");
    } else if (confirm("Are you sure to complete this project?")) {
      this._end = new Date();
    }
  }

  public isCompleted(): boolean {
    return this._end !== null;
  }
}
