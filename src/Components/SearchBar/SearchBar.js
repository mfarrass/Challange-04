import React from 'react'
import './searchbar.css'


const SearchBar = () => {
  return (


    <div className="container search_menu">
        <div className="container row">
            <div className="col-12 gap_search">
                <form action="#" className="row">
                    <div className="col-lg-3">
                      <div className="form-group text-black-50">
                        <label for="start">Tipe Driver</label>
                          <button className="text-start btn btn-outline-secondary form-group col-lg-12" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                          Pilih Tipe Driver<i className="fa-solid fa-angle-down float-end mt-1"></i> </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Dengan Sopir</button></li>
                      <li><button className="dropdown-item" type="button">Tanpa Sopir (Lepas Kunci)</button></li>
                    </ul>
                </div>
            </div>
    <div className="col-lg-2 col-md-12">
        <div className="form-group text-black-50">
            <label for="start">Tanggal</label>
              <input type="date" id="start" name="trip-start"
              value="2022-07-22" className="date form-control btn-outline-secondary col-lg-12" min="2018-01-01" max="2023-12-31"></input></div></div>           
              <div className="col-lg-3 col-md-12">
                  <div className="form-group text-black-50">
                      <label for="start">Waktu Jemput/Ambil</label>
                      <button className="text-start btn btn-outline-secondary form-group col-lg-12" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      Pilih Waktu<i className="fa-regular fa-clock float-end d-flex mt-1"></i>
                      </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li><button className="text-start dropdown-item" type="button">08.00<span className="float-end">WIB</span></button></li>
                      <li><button className="dropdown-item" type="button">09.00<span className="float-end">WIB</span></button></li>
                      <li><button className="dropdown-item" type="button">10.00<span className="float-end">WIB</span></button></li>
                      <li><button className="dropdown-item" type="button">11.00<span className="float-end">WIB</span></button></li>
                      <li><button className="dropdown-item" type="button">12.00<span className="float-end">WIB</span></button></li>
                  </ul>
          </div>
      </div>
      <div className="col-lg-3 col-md-12">
          <div className="form-group text-black-50">
              <label for="start">Jumlah Penumpang (optional)</label>
                  <button className="text-start btn btn-outline-secondary form-group col-lg-12" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Jumlah Penumpang<i className="fa-solid fa-user-group float-end mt-1"></i> </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li><button className="dropdown-item" type="button">1 - 2</button></li>
                      <li><button className="dropdown-item" type="button">3 - 4</button></li>
                      <li><button className="dropdown-item" type="button">4 - 6</button></li>
                  </ul>
              </div>
        </div>

        <div className="col-lg-1 col-md-12">
            <div className="mt-4">
                <button className="btn-submit-form btn btn-success mt-2" type="submit">Search</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }


export default SearchBar