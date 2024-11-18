import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import "ag-grid-community/styles/ag-grid.css";
import 'ag-grid-community/styles/ag-theme-quartz.css';
import styles from './grid.module.scss';
import { doesNotMatch } from 'assert';

function GridHabitats() {
  const [rowData, setRowData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/infosHabitats.json')
      .then(res => res.json())
      .then(result => {
        console.log(result.data); 
        setRowData(result.data);
      })
      .catch(error => {
        console.error("Erro ao carregar o JSON:", error);
      });
  }, []); 
  
  const localeText = {
    contains: 'Contém',
    notContains: 'Não contém',
    startsWith: 'Começa com',
    endsWith: 'Termina com',
    filterOoo: 'Filtrar...',
    applyFilter: 'Aplicar filtro',
    andCondition: 'E',
    orCondition: 'OU',
    equals: 'Igual à',
    notEqual: 'Diferente de',
    notBlank: 'Não está vazio',
    blank: 'Está vazio'
  };

  return (
    <div>
      <h2>Animais</h2>
      <div className={styles.grid_container}>
        <div className="ag-theme-quartz-dark" style={{ height: 470, width: '90%' }}>
          <AgGridReact className={styles.grid_principal}
            defaultColDef={{ flex: 2 }}
            rowHeight={60}
            columnDefs={[
              { field: 'nome_habitat', headerName: 'Habitat', sortable: true, filter: true, cellClass: 'vertical-middle' },
              { field: 'temperatura', headerName: 'Temperatura (º)', sortable: true, filter: true },
              { field: 'temp_min', headerName: 'Temperatura Min', sortable: true, filter: true },
              { field: 'temp_max', headerName: 'Temperatura Max', sortable: true, filter: true },
              { field: 'qntd_animais', headerName: 'Quantidade', sortable: true, filter: true },
              { field: 'sensor', headerName: 'Sensor', sortable: true, filter: true }
            ]}
            rowData={rowData}
            localeText={localeText} 
          />
        </div>
      </div>
    </div>
  );
}

export default GridHabitats;
