import React, { memo, useState } from 'react';

import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const Registration = memo(() => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenBottom: false,
  });

  return (
    <>
      <div>
        <button
          onClick={() =>
            setState({ isPaneOpenBottom: true })
          }
        >
          fsdsdfa
        </button>
      </div>

      <SlidingPane
        closeIcon={<div>close</div>}
        isOpen={state.isPaneOpenBottom}
        title="회원가입"
        from="bottom"
        width="100%"
        height="50%"
        onRequestClose={() =>
          setState({ isPaneOpenBottom: false })
        }
      >
        <div>
          And I am pane content on Bottom.
        </div>
      </SlidingPane>
    </>
  );
});

export default Registration;
