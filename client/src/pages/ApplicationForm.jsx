import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Tooltip from '../components/Tooltip';
import Datepicker from "../components/Datepicker";
import Flatpickr from "react-flatpickr";
import {modes} from "react-transition-group/SwitchTransition";
import DateTimePicker from "react-flatpickr/lib";
import FileInput from "../components/FileInput";

function ApplicationForm() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const datePickerOptions= {
    mode: 'single'
  }

  return (
      <div className="flex h-[100dvh] overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Page header */}
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Ziadost o vstup motoroveho vozidla do stareho mesta co ja vim</h1>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700">
                {/* Components */}
                <div className="space-y-8 mt-8">
                  {/* Input Types */}
                  <div>
                    <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Udaje o osobe</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Meno
                          </label>
                          <input id="default" className="form-input w-full" type="text" />
                        </div>
                        {/* End */}
                      </div>

                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Priezvisko
                          </label>
                          <input id="default" className="form-input w-full" type="text" />
                        </div>
                        {/* End */}
                      </div>

                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Evidecne cislo vozidla
                          </label>
                          <input id="default" className="form-input w-full" type="text" />
                        </div>
                        {/* End */}
                      </div>

                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            E-mail
                          </label>
                          <input id="default" className="form-input w-full" type="text" />
                        </div>
                        {/* End */}
                      </div>

                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Tel. Cislo
                          </label>
                          <input id="default" className="form-input w-full" type="text" />
                        </div>
                        {/* End */}
                      </div>

                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Adresa
                          </label>
                          <input id="default" className="form-input w-full" type="text" />
                        </div>
                        {/* End */}
                      </div>

                    </div>
                  </div>

                  {/* Input Sizes */}
                  <div>
                    <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Casove obdobie</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Od
                          </label>
                          <Datepicker />
                        </div>
                        {/* End */}
                      </div>

                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Do
                          </label>
                          <Datepicker />
                        </div>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Input States */}
                  <div>
                    <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Prilohy</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Prilohy (subory)
                          </label>
                          <FileInput />
                        </div>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Prilohy</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                      <div>
                        {/* Start */}
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="default">
                            Odovodnenie
                          </label>
                          <input id="default" className="form-input w-full" type="text" />
                        </div>
                        {/* End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
}

export default ApplicationForm;