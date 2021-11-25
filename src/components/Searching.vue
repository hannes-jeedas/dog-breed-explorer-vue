<template>
  <!-- Search -->
  <div>
    <div class="container-search">
      <input
        class="form-control"
        id="listSearch"
        type="text"
        placeholder="Otsi koeratõugu"
      />
      <br />
      <ul class="list-group" id="myList">
        <li class="list-group-item">
          <p>Kaal (kg)</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              option 1</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              option 2</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              option 3</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Turjakõrgus (cm)</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              option 1</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              option 2</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              option 3</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Värvus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Valge</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Must</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Pruun</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Oranz</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Punane</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kollakas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kuldne</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Hall</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Sinine</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Treeningu vajadus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Baastreening</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Lisatreening</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Mõningane treening</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Allergiaohtlik koer</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Jah</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Ei</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Koera suurus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kääbuskoer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Väike koer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Keskmine koer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Suur koer</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Ülisuur koer</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Tervis</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Terve</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Pärilikud terviseprobleemid</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Vähk</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Silmahaigus</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Düsplaasia</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Südamehaigus</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Karvastik</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Lühike</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Pikk</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Paks/Tihe</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Villane</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Õhuke</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Karm</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Sile</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Laineline</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Karhva hooldus</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Iga päev</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Korra nädalas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kaks korda nädalas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kolm korda nädalas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Aegajalt</label
            >
          </div>
        </li>
        <li class="list-group-item">
          <p>Iseloom</p>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Lojaalne</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Südamlik</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Lõbus</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Rõõmsameelne</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Umbusaldav</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Ettevaatlik</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Valvas</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked"
              >Kiinduv</label
            >
          </div>
        </li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary">Search</button>
  </div>
</template>

<script>
// import breedsData from "./breeds.json";
// export default {
//   data() {
//     return {
//       breeds: breedsData,
//     };
//   },
// };
</script>
