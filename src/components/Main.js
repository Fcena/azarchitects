import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || 'grey'};
  /* min-height: 300px; This way it works*/
  /* height: 100%; */
  padding: 2em;
`;

class Content extends Component {
  render() {
    return (
      <StyledContent {...this.props}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eos ipsa saepe eum maxime accusamus quos quae. Distinctio nisi vel
          obcaecati veritatis natus, ratione ipsam dolores voluptas libero at
          qui soluta velit error! Atque ipsa iusto, eligendi voluptates
          accusamus blanditiis dolore ipsum veritatis ut eius perspiciatis
          cupiditate quia nesciunt adipisci quam autem dolor vitae id nulla.
          Rerum voluptas accusamus tempora nam architecto doloremque cupiditate
          nulla dolorem sed magnam sit perspiciatis maxime inventore excepturi
          expedita iste fugiat nesciunt, dolorum et assumenda, animi similique
          error. Voluptatem beatae facere, ullam corporis iste porro, possimus
          consequatur maxime dolore eveniet quisquam incidunt odio aliquid
          itaque?
        </div>
        <div>
          Praesentium sapiente magni facere labore soluta id odio numquam
          recusandae vel quos atque possimus nemo adipisci officiis optio quod,
          nostrum maxime! Tenetur reiciendis, unde molestias eveniet veritatis
          ducimus possimus, laudantium expedita consequatur in ipsum error porro
          eius harum animi itaque soluta eos? Et in amet molestias suscipit
          culpa iste velit illum expedita quasi, molestiae pariatur fuga
          perferendis eum quod nam rerum eveniet asperiores necessitatibus
          obcaecati. Voluptatum molestias ratione expedita, necessitatibus esse
          ea. Mollitia deleniti eos veritatis labore ipsa placeat magni quos
          nihil provident eaque ad at deserunt quaerat ab dicta officiis,
          commodi odio eius nemo itaque ex cumque eum sapiente!
        </div>
        <div>
          Eligendi non earum suscipit vel aut fugiat dolores qui! Tenetur
          laboriosam ipsum nihil et consequatur, libero enim suscipit. Suscipit
          ratione sunt officia culpa eos esse minus pariatur praesentium at
          aliquid laudantium aliquam rem, soluta illum rerum tempora labore?
          Deserunt unde suscipit soluta porro, perspiciatis, ratione, et maiores
          adipisci nisi minima aspernatur natus obcaecati animi excepturi nobis
          eligendi nostrum asperiores blanditiis velit. Ipsam, ex. Labore,
          mollitia ipsa ea aspernatur voluptate illum dicta! Est doloremque
          suscipit esse ratione natus a quidem, reprehenderit obcaecati, ipsa
          tenetur repellat? Aliquam eum sunt, assumenda, suscipit ipsum sequi
          temporibus culpa in quo consequatur dolorum aspernatur voluptates
          veritatis!
        </div>
      </StyledContent>
    );
  }
}

export default Content;
