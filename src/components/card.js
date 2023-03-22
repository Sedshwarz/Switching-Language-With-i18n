import '../App.css'
import { withTranslation } from 'react-i18next';

function Card({t, i18n}) {
    return (
        <>
            <div className="container">
                <img src="./img/Shakespeare.jpg" width="200" height="300" alt="Sheakspeare" />
                <div className='right-container'>
                    <div className="right">
                        <div>
                            <h2>William Shakespeare (1554-1616)</h2><br />
                            <p>{i18n.t('summary')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withTranslation()(Card);