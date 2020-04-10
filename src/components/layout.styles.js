import { css } from '@emotion/core';
import { media, fontSize, colors } from '../utils/rocketbelt';

export const wrapCss = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    &.linked-heading_heading {
      display: inline;
    }
  }

  h1 {
    &.linked-heading_heading {
      font-size: ${fontSize(4)};

      ${media[0]} {
        font-size: ${fontSize(6)};
      }

      ${media[1]} {
        font-size: ${fontSize(8)};
      }
    }
  }

  h2 {
    &.linked-heading_heading {
      margin-top: 1em;
      font-size: ${fontSize(1)};

      ${media[0]} {
        font-size: ${fontSize(2)};
      }

      ${media[1]} {
        font-size: ${fontSize(3)};
      }
    }
  }

  h3 {
    &.linked-heading_heading {
      margin-top: 0.5em;
      font-size: ${fontSize(1)};

      ${media[0]} {
        font-size: ${fontSize(2)};
      }
    }
  }

  .linked-heading_anchor {
    line-height: 1;
  }

  .footnote-ref {
    font-weight: 600;
    font-style: italic;
    font-size: ${fontSize(-1)};
  }
`;

export const mainCss = css`
  grid-area: main;
`;

export const mainWrapCss = css`
  margin: auto;
  padding: 1rem;

  max-width: calc(1200px - var(--nav-desktop-width));
  height: 100%;

  ${media[0]} {
    padding: 2rem;
    padding-top: 1rem;
  }

  ${media[1]} {
    margin-top: 0;
    padding: 2rem;
    padding-top: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.08);
  }
`;