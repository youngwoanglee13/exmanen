import publicar from "./sumador.js";

describe("Sumar", () => {
  it("deberia publicar un mensaje", () => {
    expect(publicar("HOLA MUNDO")).toEqual("HOLA MUNDO");
  });
  it("deberia dar error al ingresar un texto vacio", () => {
    expect(publicar("")).toEqual("error-publicacion");
  });
});
