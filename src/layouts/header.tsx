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
                <NavbarArticle title='Phonetics'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='Sounds'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='' />
                                <NavbarLink href='' mb text='' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Charts'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Alphabet' />
                                <NavbarLink href='' text='IPA' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>

                {/* Vocabulary */}
                <NavbarArticle title='Essential vocabulary'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='A1'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Adjectives' />
                                <NavbarLink href='' text='Adverbs' />
                                <NavbarLink href='' text='Determiners' />
                                <NavbarLink href='' text='Prepositions' />
                                <NavbarLink href='' text='Nouns' />
                                <NavbarLink href='' mb text='Verbs' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='A2'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Adjectives' />
                                <NavbarLink href='' text='Adverbs' />
                                <NavbarLink href='' text='Determiners' />
                                <NavbarLink href='' text='Prepositions' />
                                <NavbarLink href='' text='Nouns' />
                                <NavbarLink href='' text='Verbs' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>

                {/* Verb tenses */}
                <NavbarArticle title='Verb tenses'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='Present'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Affirmative' />
                                <NavbarLink href='' text='Negative' />
                                <NavbarLink href='' mb text='Interrogative' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Past'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Affirmative' />
                                <NavbarLink href='' text='Negative' />
                                <NavbarLink href='' mb text='Interrogative' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Future'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Affirmative' />
                                <NavbarLink href='' text='Negative' />
                                <NavbarLink href='' text='Interrogative' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>

                {/* Everyday phrases */}
                <NavbarArticle title='Everyday phrases'>
                    <div className='flex flex-col gap-2'>
                        <NavbarDetails subtitle='Politeness'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Greetings' />
                                <NavbarLink href='' mb text='Farewells' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Expressions'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Agreement' />
                                <NavbarLink href='' mb text='Disagreement' />
                            </NavbarMenu>
                        </NavbarDetails>
                        <NavbarDetails subtitle='Questions'>
                            <NavbarMenu>
                                <NavbarLink href='' mt text='Help' />
                                <NavbarLink href='' text='Emotions' />
                            </NavbarMenu>
                        </NavbarDetails>
                    </div>
                </NavbarArticle>
            </section>
        </header>
    )
}
