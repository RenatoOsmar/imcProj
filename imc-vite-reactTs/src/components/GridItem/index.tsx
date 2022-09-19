import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import gordines from '../../assets/gordines.png';
import magrelo from '../../assets/magrelo.jpg';
import sarado from '../../assets/sarado.jpg';
import sobrepeso from '../../assets/sobrepeso.jpg';
import acimadopeso from '../../assets/acimaPeso.jpg';

type Props = {
    item: Level;
}

export const GridItem = ({item}: Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === 'gordines' && <img src={gordines} alt='' width='220'/>}
                {item.icon === 'magrelo' && <img src={magrelo} alt='' width='200'/>}
                {item.icon === 'sarado' && <img src={sarado} alt='' width='200'/>}
                {item.icon === 'sobrepeso' && <img src={acimadopeso} alt='' width='150'/>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m2</div>
            
            }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}