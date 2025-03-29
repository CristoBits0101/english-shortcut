// Components
import NavbarArticle from '@/components/navbar/navbar-article'
import NavbarDetails from '@/components/navbar/navbar-details';
import NavbarLink from '@/components/navbar/navbar-link'
import NavbarMenu from '@/components/navbar/navbar-menu';

// Fonts
import { dancingScript } from "@/lib/google-fonts";

export default function HeaderLayout() {
    return (
        <header className='h-full p-4 flex flex-col gap-16'>

            {/* Title */}
            <h1 className={`flex gap-2 ${dancingScript.className} text-4xl font-medium`}>
                <span className='text-[#C8102E]'>English</span>
                <span className='text-[#00247D]'>Shortcut</span>
            </h1>

            {/* Navigation */}
            <section className='flex flex-col gap-8'>

                {/* Phonetics */}
                <NavbarArticle title='Fonética'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='Sonidos'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='' />
                                <NavbarLink href='' mb text='' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Tablas'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Abecedario' />
                                <NavbarLink href='' text='IPA' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>

                {/* Vocabulario */}
                <NavbarArticle title='Vocabulario imprescindible'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='A1'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Adjetivos' />
                                <NavbarLink href='' text='Adverbios' />
                                <NavbarLink href='' text='Determinantes' />
                                <NavbarLink href='' text='Preposiciones' />
                                <NavbarLink href='' text='Sustantivos' />
                                <NavbarLink href='' mb text='Verbos' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='A2'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Adjetivos' />
                                <NavbarLink href='' text='Adverbios' />
                                <NavbarLink href='' text='Determinantes' />
                                <NavbarLink href='' text='Preposiciones' />
                                <NavbarLink href='' text='Sustantivos' />
                                <NavbarLink href='' text='Verbos' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>

                {/* Verb tenses */}
                <NavbarArticle title='Tiempos verbales'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='Presente'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Afirmativo' />
                                <NavbarLink href='' text='Negativo' />
                                <NavbarLink href='' mb text='Interrogativo' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Pasado'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Afirmativo' />
                                <NavbarLink href='' text='Negativo' />
                                <NavbarLink href='' mb text='Interrogativo' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Futuro'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Afirmativo' />
                                <NavbarLink href='' text='Negativo' />
                                <NavbarLink href='' text='Interrogativo' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>

                {/* Everyday phrases */}
                <NavbarArticle title='Frases cotidianas'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='Cortesía'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Saludos' />
                                <NavbarLink href='' mb text='Despedidas' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Expresiones'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Acuerdo' />
                                <NavbarLink href='' mb text='Desacuerdo' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Preguntas'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Ayuda' />
                                <NavbarLink href='' text='Emociones' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>
            </section>
        </header>
    )
}
