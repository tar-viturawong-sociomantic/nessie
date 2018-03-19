/* eslint-disable max-len */
import React              from 'react';
import PropTypes          from 'prop-types';

import { buildClassName } from '../utils';
import styles             from './adPlacement.css';

const AdPlacement = ( {
    aboveIsSelected,
    belowIsSelected,
    className,
    cssMap,
    highlighted,
    belowIsShown
} ) =>
// {
//     const { state } = this.state;
//
//     className = classNames( {
//         [ `show-${state.show}` ]           : true,
//         [ `highlight-${state.highlight}` ] : true,
//         'aboveSelected'                    : state.aboveIsSelected,
//         'belowSelected'                    : state.belowIsSelected
//     } );

    // return (
    ( <svg
        className = { buildClassName( className, cssMap, {
            belowIsShown,
            // upperContent,
            // lowerContent
        } ) }
        width = "266px"
        height = "151px"
        viewBox = "0 0 266 151">
        <g id = "Page-1" stroke = "none" strokeWidth = "1" fill = "none" fillRule = "evenodd">
            <g className = "content" transform = "translate(0, 0)" fillRule = "nonzero">
                <g className = "upperContent" transform = "translate(27.000000, 22.000000)" fillRule = "nonzero">
                    <rect className = "content-background" x = "0" y = "0" width = "212" height = "120" />
                    <rect className = "rectangle-path" x = "8" y = "9" width = "196" height = "34" />
                    <rect className = "rectangle-path" x = "8" y = "49" width = "170" height = "5" />
                    <rect className = "rectangle-path" x = "98" y = "70" width = "106" height = "5" />
                    <rect className = "rectangle-path" x = "98" y = "87" width = "50" height = "5" />
                    <rect className = "rectangle-path" x = "98" y = "98" width = "50" height = "5" />
                    <rect className = "rectangle-path" x = "98" y = "109" width = "50" height = "5" />
                    <rect className = "rectangle-path" x = "154" y = "87" width = "50" height = "5" />
                    <rect className = "rectangle-path" x = "154" y = "98" width = "50" height = "5" />
                    <rect className = "rectangle-path" x = "154" y = "109" width = "50" height = "5" />
                    <rect className = "rectangle-path" x = "8" y = "70" width = "84" height = "44" />
                </g>
                <g id = "divider" transform = "translate(0.000000, 142.000000)" fill = "#C3C8CD" fillRule = "nonzero">
                    <path d = "M258.1,2 L253.2,2 L253.2,0 L258.1,0 L258.1,2 Z M266,2 L261.1,2 L261.1,0 L266,0 L266,2 Z M250.2,2 L245.3,2 L245.3,0 L250.2,0 L250.2,2 Z M242.3,2 L237.4,2 L237.4,0 L242.3,0 L242.3,2 Z M234.4,2 L229.5,2 L229.5,0 L234.4,0 L234.4,2 Z M226.4,2 L221.5,2 L221.5,0 L226.4,0 L226.4,2 Z M218.5,2 L213.6,2 L213.6,0 L218.5,0 L218.5,2 Z M210.6,2 L205.7,2 L205.7,0 L210.6,0 L210.6,2 Z M202.7,2 L197.8,2 L197.8,0 L202.7,0 L202.7,2 Z M194.8,2 L189.9,2 L189.9,0 L194.8,0 L194.8,2 Z M186.9,2 L182,2 L182,0 L186.9,0 L186.9,2 Z M179,2 L174,2 L174,0 L178.9,0 L178.9,2 L179,2 Z M171.1,2 L166.2,2 L166.2,0 L171.1,0 L171.1,2 Z M163.2,2 L158.3,2 L158.3,0 L163.2,0 L163.2,2 Z M155.2,2 L150.3,2 L150.3,0 L155.2,0 L155.2,2 Z M147.3,2 L142.4,2 L142.4,0 L147.3,0 L147.3,2 Z M139.4,2 L134.5,2 L134.5,0 L139.4,0 L139.4,2 Z M131.5,2 L126.6,2 L126.6,0 L131.5,0 L131.5,2 Z M123.6,2 L118.7,2 L118.7,0 L123.6,0 L123.6,2 Z M115.7,2 L110.8,2 L110.8,0 L115.7,0 L115.7,2 Z M107.8,2 L102.9,2 L102.9,0 L107.8,0 L107.8,2 Z M99.9,2 L95,2 L95,0 L99.9,0 L99.9,2 Z M92,2 L87,2 L87,0 L92,0 L92,2 Z M84.1,2 L79.2,2 L79.2,0 L84.1,0 L84.1,2 Z M76.1,2 L71.2,2 L71.2,0 L76.1,0 L76.1,2 Z M68.2,2 L63.3,2 L63.3,0 L68.2,0 L68.2,2 Z M60.3,2 L55.4,2 L55.4,0 L60.3,0 L60.3,2 Z M52.4,2 L47.5,2 L47.5,0 L52.4,0 L52.4,2 Z M44.5,2 L39.6,2 L39.6,0 L44.5,0 L44.5,2 Z M36.6,2 L31.7,2 L31.7,0 L36.6,0 L36.6,2 Z M28.7,2 L23.8,2 L23.8,0 L28.7,0 L28.7,2 Z M20.8,2 L15.9,2 L15.9,0 L20.8,0 L20.8,2 Z M12.9,2 L7.9,2 L7.9,0 L12.8,0 L12.8,2 L12.9,2 Z M4.9,2 L0,2 L0,0 L4.9,0 L4.9,2 Z" id = "Shape" />
                </g>
                <g className = "lowerContent" transform = "translate(27.000000, 151.000000)" fillRule = "nonzero">
                    <rect className = "content-background" x = "0" y = "-7" width = "212" height = "60" />
                    <rect className = "rectangle-path" x = "8" y = "0" width = "196" height = "5" />
                    <rect className = "rectangle-path" x = "8" y = "22" width = "196" height = "23" />
                    <rect className = "rectangle-path" x = "8" y = "11" width = "163" height = "5" />
                </g>
            </g>
            <path d = "M246,151 L20,151 L20,2 C20,0.9 20.9,0 22,0 L244,0 C245.1,0 246,0.9 246,2 L246,151 Z M27,22 L27,144 L239,144 L239,22 L27,22 Z" id = "Combined-Shape" fill = "#E6E6E6" fillRule = "nonzero" />
            <path d = "M235,15 L70,15 C67.8,15 66,13.2 66,11 C66,8.8 67.8,7 70,7 L235,7 C237.2,7 239,8.8 239,11 C239,13.2 237.2,15 235,15 Z" id = "Shape" fill = "#FFFFFF" fillRule = "nonzero" />
            <g id = "Group" transform = "translate(27.000000, 7.000000)" fillRule = "nonzero">
                <circle id = "Oval" fill = "#F55F69" cx = "4" cy = "4.4" r = "4" />
                <circle id = "Oval" fill = "#FFC869" cx = "16" cy = "4.4" r = "4" />
                <circle id = "Oval" fill = "#41AF96" cx = "28" cy = "4.4" r = "4" />
            </g>
        </g>
    </svg>
    );
// };

AdPlacement.propTypes =
{
    /**
     *  Above the fold selected
     */
    aboveIsSelected : PropTypes.bool,
    /**
     *  Below the fold selected
     */
    belowIsSelected : PropTypes.bool,
    /**
     *  CSS class name
     */
    className       : PropTypes.string,
    /**
     *  CSS class map
     */
    cssMap          : PropTypes.objectOf( PropTypes.string ),
    /**
     *  Highlighted part of content
     */
    highlighted     : PropTypes.oneOf( [ 'above', 'below', 'none' ] ),
    /**
     *  Show part of content
     */
    belowIsShown    : PropTypes.bool,
};

AdPlacement.defaultProps =
{
    aboveIsSelected : undefined,
    belowIsSelected : undefined,
    className       : undefined,
    cssMap          : styles,
    highlighted     : 'none',
    belowIsShown    : false
};

/* eslint-enable max-len */

export default AdPlacement;
