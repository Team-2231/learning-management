import React , {useState} from 'react'
import styles from './StudentModules.module.css';
import StudentExercise from './StudentExercise';
import arrowDown from './arrow-down.svg';
import arrowUp from './arrow-up.svg'

function StudentModules() {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={styles.modules__container}>
            <div className={styles.modules__row} >
                <div className={styles.modules__left}>
                    <img  className={styles.icon} src='/images/modules-logo.png' alt='modules-logo'/>
                    <span className={styles.modules__titile}>Module 1 Tilte</span>
                </div>
                <div  className={styles.modules__right} onClick={()=> {setExpanded(expanded => !expanded) }}>
                    <img src={ expanded ? arrowUp : arrowDown}  alt='arrows'/>
                    {expanded && <StudentExercise />}
                   
                </div>
            </div>

            <div className={styles.modules__row} >
                <div className={styles.modules__left}>
                    <img  className={styles.icon} src='/images/modules-logo.png' alt='modules-logo'/>
                    <span className={styles.modules__titile}>Module 1 Tilte</span>
                </div>
                <div  className={styles.modules__right} onClick={()=> {setExpanded(expanded => !expanded) }}>
                    <img src={ expanded ? arrowUp : arrowDown}  alt='arrows'/>
                    {expanded && <StudentExercise />}
                   
                </div>
            </div>

        </div>
    )
}

export default StudentModules