import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InternalStateType = {};

  constructor() {
  }

  // already return a clone of the current state
  // 返回当前状态的一个克隆
  get state() {
    return this._state = this._clone(this._state);
  }

  // never allow mutation
  // 绝对不允许突变
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  get(prop?: any) {
    // use our state getter for the clone
    // 使用一个克隆状态
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    // 内部改变状态
    return this._state[prop] = value;
  }


  private _clone(object: InternalStateType) {
    // simple object clone
    // 简单对象克隆
    return JSON.parse(JSON.stringify(object));
  }
}
