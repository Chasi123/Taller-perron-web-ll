import { NombreProductoPipe } from './nombre-producto.pipe';

describe('NombreProductoPipe', () => {
  it('create an instance', () => {
    const pipe = new NombreProductoPipe();
    expect(pipe).toBeTruthy();
  });
});
