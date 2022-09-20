import { useState } from 'react';
import styles from './App.module.css';
import imcLogo from './assets/imc.png';
import { levels, calculateImc, Level} from './helpers/imc';
import { GridItem } from './components/GridItem';
import seta from './assets/seta.jpg';

const App = () => {
const [heightField, setHightField] = useState<number>(0);
const [weigthFild, setWeightFilde] = useState<number>(0);
const [toShow, setToShow] = useState<Level | null>(null);


function handleCalcularButton() {
  if(heightField && weigthFild) {
    setToShow(calculateImc(heightField, weigthFild));
  }else {
    alert('Digite todos os campos.');
  }
}
  const handleBack = () => {
    setToShow(null);
    setHightField(0);
    setWeightFilde(0);
  }



  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={imcLogo} alt='' width={50}  />
            - by Renato Osmar
        </div>
      </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Qual é o seu IMC?</h1>
            <p>De acordo com a Organização Mundial de Saúde(OMS).
                O excesso de peso e a obesidade são medidos usando o Índice de Massa Corporal (IMC). </p>
            
            
            <hr/>
               Altura:
               <input  
                type='number'
                placeholder='Digite a sua altura. Ex: 1.5 (em métros)'
                value={heightField > 0 ? heightField : ''}
                onChange={(e)=> setHightField(parseFloat(e.target.value))}
                disabled={toShow ? true : false}
               />
                Peso:
               <input  
                type='number'
                placeholder='Digite o seu peso. Ex: 90.5 (em kg)'
                value={weigthFild > 0 ? weigthFild : ''}
                onChange={(e)=> setWeightFilde(parseFloat(e.target.value))}
                disabled={toShow ? true : false}
               /><hr/>
               <button onClick={handleCalcularButton}  disabled={toShow ? true : false}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            {!toShow &&
            <div className={styles.grid}>
                {levels.map((item, key)=>(
                  < GridItem key={key} item={item}  />
                ))}
            </div>
              }
              {toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBack}>
                  <img src={seta} alt='' width={90} style={{borderRadius:100}} />
                </div>
                <GridItem  item={toShow}/>
              </div>
              }
          </div>
        </div>
    </div>

  );
}
export default App;
