import { useState } from 'react'
import './legal.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher'
import {UpArrowIcon} from '../../assets/icons/up_arrow_icon'
import {DownArrowIcon} from '../../assets/icons/down_arrow_icon'

import useActiveSection from '../../hooks/useActiveSection';
import { scrollTo } from '../../utils/scroll';

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
        <Helmet>
            <title>General Terms and Conditions of Sale — Epsilon Chimie</title>
            <meta name="description" content="General terms and conditions of sale for Epsilon Chimie. Covers pricing, payment, delivery, warranties and compliance. Last updated June 2026." />
        </Helmet>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>GENERAL TERMS</span></div>
            <div>
                <h1>General terms and conditions of sale</h1>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='general-terms'>
            <article>
                <LanguageSwitcher/>
                <p>on this page</p>
                <ul>
                    {sections.map(({ key }, i) => (
                        <li key={key}>
                            <button
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
                        <li key={key}>
                            <button type="button"  id={key} onClick={() =>handleScrollTo(key)}>
                                <span className='section-title' onClick={() => toggle(i)}>
                                    {t(`general-terms.sections.${key}.title`)}
                                    <span>{openIndex === i ? <UpArrowIcon aria-hidden="true" /> : <DownArrowIcon aria-hidden="true"/>}</span>
                                </span>

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