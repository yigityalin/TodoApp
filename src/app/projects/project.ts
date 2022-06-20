import {Progress} from "./progress";

export class Project extends Progress {
  private readonly _name: string;
  private _progress: Progress[] = [];

  constructor(name: string, start: Date) {
    super(start);
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public get progress(): Progress[] {
    return this._progress;
  }
}
