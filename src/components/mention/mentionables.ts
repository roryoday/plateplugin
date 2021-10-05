import { MentionNodeData } from '@udecode/plate';

// 88 - 4 symbol/component options
export const MENTIONABLES: MentionNodeData[] = [
  { value: '\u003D', test: 'equals' },
  { value:  '\u2260', test: 'notequalto'},
  { value:  '\u2248', test: 'approximation'},
  { value:  '\u003E', test: 'greaterthan'},
  { value:  '\u003C', test: 'lessthan'},
  { value:  '\u2265', test: 'greaterthanorequalto'},
  { value:  '\u2264', test: 'lessthanorequalto'},
  { value:  '\u0028', test: 'leftparenthesis'},
  { value:  '\u0029', test: 'rightparenthesis'},
  { value:  '\u005B', test: 'leftsquarebracket'},
  { value:  '\u005D', test: 'rightsquarebracket'},
  { value:  '\u002B', test: 'plus'},
  { value:  '\u2212', test: 'minus'},
  { value:  '\u00B1', test: 'plusorminus'},
  { value:  '\u2213', test: 'minusorplus'},
  { value:  '\u2217', test: 'multiplicationstar'},
  { value:  '\u00D7', test: 'multiplicationcross'},
  { value:  '\u22C5', test: 'multiplicationdot'},
  { value:  '\u00F7', test: 'divisionsymbol'},
  { value:  '\u2215', test: 'divisionslash'},
  { value:  'mod', test: 'modulo'},
  { value:  '\u2038', test: 'caret'},
  { value:  '\u221A', test: 'squareroot'},
  { value:  '\u221B', test: 'cuberoot'},
  { value:  '\u221C', test: 'fourthroot'},
  { value:  '\u0025', test: 'percent'},
  { value:  '\u2030', test: 'permille'},
  { value:  'ppm', test: 'permillion'},
  { value:  'ppb', test: 'perbillion'},
  { value:  'ppt', test: 'pertrillion'},
  { value:  '\u00B0', test: 'degree'},
  { value:  '\u2032', test: 'prime'},
  { value:  '\u2033', test: 'doubleprime'},
  { value:  '\u007E', test: 'approximationtilde'},
  { value:  '\u03c0', test: 'pi'},
  { value:  'rad', test: 'radians'},
  { value:  'grad', test: 'gradians'},
  { value:  '\u2261', test: 'identical'},
  { value:  '\u221E', test: 'infinity'},
  { value:  '\u007B', test: 'leftbrace'},
  { value:  '\u007D', test: 'rightbrace'},
  { value:  '\u230A', test: 'leftfloor'},
  { value:  '\u230B', test: 'rightfloor'},
  { value:  '\u2308', test: 'leftceiling'},
  { value:  '\u2309', test: 'rightceiling'},
  { value:  '\u0021', test: 'factorial'},
  { value:  '\u007C', test: 'absolutevaluebrace'},
  { value:  '\u0394', test: 'delta'},
  { value:  '\u{1D452}', test: 'euler'},
  { value:  '\u03C6', test: 'phi'},
  { value:  'lim', test: 'lim'},
  { value:  'lim component', test: 'limcomponent'},
  { value:  'log', test: 'log'},
  { value:  'ln', test: 'naturallog'},
  { value:  'ln', test: 'ln'},
  { value:  'max', test: 'max'},
  { value:  'min', test: 'min'},
  { value:  'sin', test: 'sin'},
  { value:  'cos', test: 'cos'},
  { value:  'tan', test: 'tan'},
  { value:  'csc', test: 'csc'},
  { value:  'sec', test: 'sec'},
  { value:  'cot', test: 'cot'},
  { value:  'sinh', test: 'sinh'},
  { value:  'cosh', test: 'cosh'},
  { value:  'tanh', test: 'tanh'},
  { value:  'csch', test: 'csch'},
  { value:  'sech', test: 'sech'},
  { value:  'coth', test: 'coth'},
  { value:  '\u22c3', test: 'union'},
  { value:  '\u22c2', test: 'intersection'},
  { value:  '\u2227', test: 'and'},
  { value:  '\u2228', test: 'or'},
  { value:  '\u222b', test: 'integral'},
  { value:  '\u222b component', test: 'integralcomponent'},
  { value:  '\u222c', test: 'integraldouble'},
  { value:  '\u222d', test: 'integraltriple'},
  { value:  '\u2a0c', test: 'integralquadruple'},
  { value:  '\u222e', test: 'integralcontour'},
  { value:  '\u222f', test: 'integralsurface'},
  { value:  '\u2230', test: 'integralvolume'},
  { value:  '\u2211', test: 'sum'},
  { value:  '\u2211 component', test: 'sumcomponent'},
  { value:  '\u00bc', test: 'fraction'},
  { value:  'bigoperator', test: 'bigoperator'},
  { value:  '\u220f', test: 'product'},
  { value:  '\u2210', test: 'coproduct'},
];