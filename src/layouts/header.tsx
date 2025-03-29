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
                                <NavbarLink href='' mt={false} text='' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Tablas'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Abecedario' />
                                <NavbarLink href='' mt={false} text='IPA' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>

                {/* Vocabulario */}
                <NavbarArticle title='Vocabulario imprescindible'>
                    <NavbarDetails subtitle='Imprescindible'>
                        <NavbarMenu>
                            <NavbarLink href='' mt text='Adjetivos' />
                            <NavbarLink href='' mt={false} text='Adverbios' />
                            <NavbarLink href='' mt={false} text='Determinantes' />
                            <NavbarLink href='' mt={false} text='Preposiciones' />
                            <NavbarLink href='' mt={false} text='Sustantivos' />
                            <NavbarLink href='' mt={false} text='Verbos' />
                        </NavbarMenu>
                    </NavbarDetails>
                </NavbarArticle>

                {/* Verb tenses */}
                <NavbarArticle title='Tiempos verbales'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='Presente'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Afirmativo' />
                                <NavbarLink href='' mt={false} text='Negativo' />
                                <NavbarLink href='' mt={false} text='Interrogativo' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Pasado'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Afirmativo' />
                                <NavbarLink href='' mt={false} text='Negativo' />
                                <NavbarLink href='' mt={false} text='Interrogativo' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Futuro'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Afirmativo' />
                                <NavbarLink href='' mt={false} text='Negativo' />
                                <NavbarLink href='' mt={false} text='Interrogativo' />
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
                                <NavbarLink href='' mt={false} text='Despedidas' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Expresiones'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Acuerdo' />
                                <NavbarLink href='' mt={false} text='Desacuerdo' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Preguntas'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Ayuda' />
                                <NavbarLink href='' mt={false} text='Emociones' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>
            </section>
        </header>
    )
}
