import ParagraphText from './components/ParagraphText'
import Slide from './components/Slide'
import TitleText from './components/TitleText'

export default function Home() {
    return (
        <div className='h-screen w-full mx:auto overflow-scroll snap-y snap-mandatory'>
            <Slide id="about">
                <TitleText>Apie Mane</TitleText>
                <ParagraphText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl nec ultricies lacinia, nunc nisl tincidunt
                    tortor, vitae aliquam nisl nisl et nisl. Sed euismod, nisl
                    nec ultricies lacinia, nunc nisl tincidunt tortor, vitae
                    aliquam nisl nisl et nisl. Sed euismod, nisl nec ultricies
                    lacinia, nunc nisl tincidunt tortor, vitae aliquam nisl nisl
                    et nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl
                </ParagraphText>
            </Slide>

            <Slide id="services">
                <TitleText>Paslaugos</TitleText>
                <ParagraphText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl nec ultricies lacinia, nunc nisl tincidunt
                    tortor, vitae aliquam nisl nisl et nisl. Sed euismod, nisl
                </ParagraphText>
            </Slide>
        </div>
    )
}
