import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrendasService {

  constructor() { }
}
async getPrendas() {
  const res = await fetch()
  const resjson = (await res).json()
  return resjson
}