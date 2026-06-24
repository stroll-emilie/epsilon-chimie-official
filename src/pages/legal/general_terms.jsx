import { useState } from 'react'
import './legal.css'
import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher'
import {UpArrowIcon} from '../../assets/icons/up_arrow_icon'
import {DownArrowIcon} from '../../assets/icons/down_arrow_icon'

import useActiveSection from '../../hooks/useActiveSection';
import { scrollTo } from '../../utils/scroll';

// const SECTIONS = [
//     'scope', 'offers', 'prices', 'payment', 'risk',
//     'specifications', 'compilance', 'acceptance', 'warranties',
//     'reach', 'export', 'force', 'property', 'confidentiality',
//     'protection', 'corruption', 'termination', 'governing', 'provisions'
// ]

function GeneralTerms() {

    const sections = [
        { key: 'scope' },
        { key: 'offers' },
        { key: 'prices' },
        { key: 'payment' },
        { key: 'risk' },
        { key: 'specifications' },
        { key: 'compilance' },
        { key: 'acceptance' },
        { key: 'warranties' },
        { key: 'reach' },
        { key: 'export' },
        { key: 'force' },
        { key: 'property' },
        { key: 'confidentiality' },
        { key: 'protection' },
        { key: 'corruption' },
        { key: 'termination' },
        { key: 'governing' },
        { key: 'provisions' },
    ]

    const { t } = useApp()
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)
    const [activeKey, setActiveKey] = useActiveSection(sections);
    
    function handleScrollTo(key) {
        const i = sections.findIndex(s => s.key === key);
        setOpenIndex(i);
        setTimeout(() => scrollTo(key), 50);
        setActiveKey(key);
    }

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>GENERAL TERMS</span></div>
            <div>
                <h2>General terms and conditions of sale</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='general-terms'>
            <article>
                <LanguageSwitcher/>
                <p>on this page</p>
                <ul>
                    {sections.map(({ key, special }, i) => (
                        <li>
                            <button
                            key={key}
                            onClick={() => { handleScrollTo(key); setActiveKey(key); }}
                            className={activeKey === key ? 'active' : ''}
                            >
                                {t(`general-terms.sections.${key}.title`)}
                            </button>
                        </li> 
                    ))}
                </ul>
            </article>

            <article>
                <p dangerouslySetInnerHTML={{ __html: t('general-terms.head') }} />
                <ul>
                    {sections.map(({ key }, i) => (
                        <li>
                            <button type="button" key={key} id={key} onClick={() =>handleScrollTo(key)}>
                                <h3 onClick={() => toggle(i)}>
                                    {t(`general-terms.sections.${key}.title`)}
                                    <span>{openIndex === i ? <UpArrowIcon /> : <DownArrowIcon />}</span>
                                </h3>

                                {openIndex === i && (
                                    t(`general-terms.sections.${key}.subsections`).map((item, j) => (
                                    <div key={item}>
                                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                        {item.head && <p>{item.head}</p>}
                                        {item.content && <p dangerouslySetInnerHTML={{ __html: item.content }} />}
                                        {item.list && (
                                        <ul>
                                            {item.list.map((li, k) => (
                                            <li key={li} dangerouslySetInnerHTML={{ __html: li }} />
                                            ))}
                                        </ul>
                                        )}
                                        {item.foot && <p>{item.foot}</p>}
                                    </div>
                                    ))
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className='legal-note'>
                    <p>{t('note')}</p>
                </div>
            </article>
        </section>
    </>
    )
}

export default GeneralTerms