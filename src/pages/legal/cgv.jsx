import './legal.css'
import { Link } from 'react-router-dom'

import { useApp } from '../../context/AppContext'
import LanguageSwitcher from '../../components/LanguageSwitcher/language_switcher';

function CGV() {

    const { t } = useApp()

    return (
    <>
        <section id='legal-title'>
            <div className='path'><Link to="/">HOME</Link> / <span>CGV</span></div>
            <div>
                <h2>General terms and conditions of sale</h2>
                <p>LAST UPDATE - JUNE 2026</p>
            </div>
        </section>

        <section id='cgv'>
            <article>
                <LanguageSwitcher/>
                <p>on this page</p>
                <ul>
                    {t('cgv.nav').map((item,i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </article>


            <article>
                <p dangerouslySetInnerHTML={{__html: t('cgv.head')}} />
                <ul>
                    <li>
                        <h3>{t('cgv.sections.scope.title')}</h3>
                        {t('cgv.sections.scope.subsections').map((item) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.offers.title')}</h3>
                        {t('cgv.sections.offers.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.prices.title')}</h3>
                        {t('cgv.sections.prices.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.payment.title')}</h3>
                        {t('cgv.sections.payment.subsections').map((item, i) => (
                            <div key={i}>
                                <span dangerouslySetInnerHTML={{ __html: item.title }} />

                                {item.head && <p>{item.head}</p>}

                                {item.content && 
                                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                }

                                {item.list && 
                                    <ul>
                                        {item.list.map((li, j) => (
                                            <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                                        ))}
                                    </ul>
                                }

                                {item.foot && <p>{item.foot}</p>}
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.risk.title')}</h3>
                        {t('cgv.sections.risk.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.specifications.title')}</h3>
                        {t('cgv.sections.specifications.subsections').map((item, i) => (
                            <div key={i}>
                                <span dangerouslySetInnerHTML={{ __html: item.title }} />

                                {item.head && <p>{item.head}</p>}

                                {item.content && 
                                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                }

                                {item.list && 
                                    <ul>
                                        {item.list.map((li, j) => (
                                            <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                                        ))}
                                    </ul>
                                }

                                {item.foot && <p>{item.foot}</p>}
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.compilance.title')}</h3>
                        {t('cgv.sections.compilance.subsections').map((item, i) => (
                            <div key={i}>
                                <span dangerouslySetInnerHTML={{ __html: item.title }} />

                                {item.head && <p>{item.head}</p>}

                                {item.content && 
                                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                }

                                {item.list && 
                                    <ul>
                                        {item.list.map((li, j) => (
                                            <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                                        ))}
                                    </ul>
                                }

                                {item.foot && <p>{item.foot}</p>}
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.acceptance.title')}</h3>
                        {t('cgv.sections.acceptance.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.warranties.title')}</h3>
                        {t('cgv.sections.warranties.subsections').map((item, i) => (
                            <div key={i}>
                                <span dangerouslySetInnerHTML={{ __html: item.title }} />

                                {item.head && <p>{item.head}</p>}

                                {item.content && 
                                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                }

                                {item.list && 
                                    <ul>
                                        {item.list.map((li, j) => (
                                            <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                                        ))}
                                    </ul>
                                }

                                {item.foot && <p>{item.foot}</p>}
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.reach.title')}</h3>
                        {t('cgv.sections.reach.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.export.title')}</h3>
                        {t('cgv.sections.export.subsections').map((item, i) => (
                            <div key={i}>
                                <span dangerouslySetInnerHTML={{ __html: item.title }} />

                                {item.head && <p>{item.head}</p>}

                                {item.content && 
                                    <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                }

                                {item.list && 
                                    <ul>
                                        {item.list.map((li, j) => (
                                            <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                                        ))}
                                    </ul>
                                }

                                {item.foot && <p>{item.foot}</p>}
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.force.title')}</h3>
                        {t('cgv.sections.force.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.property.title')}</h3>
                        {t('cgv.sections.property.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.confidentiality.title')}</h3>
                        {t('cgv.sections.confidentiality.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.protection.title')}</h3>
                        {t('cgv.sections.protection.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.corruption.title')}</h3>
                        {t('cgv.sections.corruption.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.termination.title')}</h3>
                        {t('cgv.sections.termination.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.governing.title')}</h3>
                        {t('cgv.sections.governing.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>

                    <li>
                        <h3>{t('cgv.sections.provisions.title')}</h3>
                        {t('cgv.sections.provisions.subsections').map((item,i) => (
                            <div>
                                <span dangerouslySetInnerHTML={{__html: item.title}} />
                                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                        ))}
                    </li>
                </ul>
                <div className='legal-note'>
                    <p>{t('note')}</p>
                </div>
            </article>
        </section>
    </>
    )
}

export default CGV