import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import NomicsLink from '../NomicsLink'
import { NOMICS_LINK } from '../../../shared/constants/links'

describe('<NomicsLink /> component', () => {
  describe('rendering', () => {
    const wrapper = shallow(<NomicsLink />);
    it('should render a component matching the snapshot', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
      expect(wrapper).toHaveLength(1);
    });
  });

  describe('The Nomics API link', () => {
    it('should be correct', () => {
      expect(NOMICS_LINK).toEqual("https://nomics.com/");
    });
  });
});
