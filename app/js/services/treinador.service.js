angular.module("pokemonApp")
   .factory("treinadorService", treinadorService);

treinadorService.$inject = [];

function treinadorService() {
   var _treinador = {};
   var _listaTreinadores = [{ id: 1, nome: "Matheus", cidade: {cod: 1, nome: "Pallet Town"}, pokemon: {id: 1, nome: "pikachu"} }];
   var _listaCidades = [
      {cod: 1, nome: "Pallet Town"},
      {cod: 2, nome: "Viridian City"},
      {cod: 3, nome: "Vermilion City"},
      {cod: 4, nome: "Pewter City"},
      {cod: 5, nome: "Celadon City"},
      {cod: 6, nome: "Lavender Town"}
   ];

   return {
      listaTreinadores: _listaTreinadores,
      listaCidades: _listaCidades,
      treinador: _treinador
   };
}
