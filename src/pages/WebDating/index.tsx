import * as Element from './styles'
import ImageGirl from '../../assets/imgGirl.jpg'
import ImageMen from '../../assets/imgMen.jpg'

export function WebDating() {
  return (
    <Element.Root>
      <Element.Title>
        <h1>ELITE</h1>

        <h1>LOVE</h1>
      </Element.Title>

        <Element.Content>
          <Element.Images>
            <img src={ImageMen} alt="" />
            <img src={ImageGirl} alt="" />
          </Element.Images>
          <Element.Header>
            <span>Casado Com <strong>Rasta Loko #34234</strong></span>
          </Element.Header>
        </Element.Content>
    </Element.Root>
)
}