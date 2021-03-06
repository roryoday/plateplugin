import { AnyObject, MentionNodeData, TComboboxItem, TElement } from '@udecode/plate';
import { getEmptyBigOpNode } from '../BigOperator/getEmptyBigOpNode';
import { getEmptyFractionNode } from '../Fraction';
import { getEmptyLimNode } from '../Limit/getEmptyLimNode';
import { getEmptyUneditableBigOpNode } from '../UneditableBigOperator/getEmptyBigOpNode';

export type MentionEquationData = {
    node: undefined | ((arg0?: string) => TElement<AnyObject>),
    value:string

}
export const MENTIONABLES: TComboboxItem<MentionEquationData>[] = [  
  { key: '0', data:  { node: undefined,                    value:    '\u003D'}, text: 'equals' },
  { key: '1', data:  { node: undefined,                    value:    '\u2260'}, text: 'notequalto'},
  { key: '2', data:  { node: undefined,                    value:    '\u2248'}, text: 'approximation'},
  { key: '3', data:  { node: undefined,                    value:    '\u003E'}, text: 'greater than'},
  { key: '4', data:  { node: undefined,                    value:    '\u003C'}, text: 'less than'},
  { key: '5', data:  { node: undefined,                    value:    '\u2265'}, text: 'greater than or equal to'},
  { key: '6', data:  { node: undefined,                    value:    '\u2264'}, text: 'less than or equal to'},
  { key: '7', data:  { node: undefined,                    value:    '\u0028'}, text: 'left parenthesis'},
  { key: '8', data:  { node: undefined,                    value:    '\u0029'}, text: 'right parenthesis'},
  { key: '9', data:  { node: undefined,                    value:    '\u005B'}, text: 'left square bracket'},
  { key: '10', data: { node: undefined,                    value:    '\u005D'}, text: 'right square bracket'},
  { key: '11', data: { node: undefined,                    value:    '\u002B'}, text: 'plus'},
  { key: '12', data: { node: undefined,                    value:    '\u2212'}, text: 'minus'},
  { key: '13', data: { node: undefined,                    value:    '\u00B1'}, text: 'plus or minus'},
  { key: '14', data: { node: undefined,                    value:    '\u2213'}, text: 'minus or plus'},
  { key: '15', data: { node: undefined,                    value:    '\u2217'}, text: 'multiplication star'},
  { key: '16', data: { node: undefined,                    value:    '\u00D7'}, text: 'multiplication cross'},
  { key: '17', data: { node: undefined,                    value:    '\u22C5'}, text: 'multiplication dot'},
  { key: '18', data: { node: undefined,                    value:    '\u00F7'}, text: 'division symbol'},
  { key: '19', data: { node: undefined,                    value:    '\u2215'}, text: 'division slash'},
  { key: '20', data: { node: undefined,                    value:    'mod'}, text: 'modulo'},
  { key: '21', data: { node: undefined,                    value:    '\u2038'}, text: 'caret'},
  { key: '22', data: { node: undefined,                    value:    '\u221A'}, text: 'square root'},
  { key: '23', data: { node: undefined,                    value:    '\u221B'}, text: 'cube root'},
  { key: '24', data: { node: undefined,                    value:    '\u221C'}, text: 'fourth root'},
  { key: '25', data: { node: undefined,                    value:    '\u0025'}, text: 'percent'},
  { key: '26', data: { node: undefined,                    value:    '\u2030'}, text: 'permille'},
  { key: '27', data: { node: undefined,                    value:    'ppm'}, text: 'per million'},
  { key: '28', data: { node: undefined,                    value:    'ppb'}, text: 'per billion'},
  { key: '29', data: { node: undefined,                    value:    'ppt'}, text: 'per trillion'},
  { key: '30', data: { node: undefined,                    value:    '\u00B0'}, text: 'degree'},
  { key: '31', data: { node: undefined,                    value:    '\u2032'}, text: 'prime'},
  { key: '32', data: { node: undefined,                    value:    '\u2033'}, text: 'double prime'},
  { key: '33', data: { node: undefined,                    value:    '\u007E'}, text: 'approximation tilde'},
  { key: '34', data: { node: undefined,                    value:    '\u03c0'}, text: 'pi'},
  { key: '35', data: { node: undefined,                    value:    'rad'}, text: 'radians'},
  { key: '36', data: { node: undefined,                    value:    'grad'}, text: 'gradians'},
  { key: '37', data: { node: undefined,                    value:    '\u2261'}, text: 'identical'},
  { key: '38', data: { node: undefined,                    value:    '\u221E'}, text: 'infinity'},
  { key: '39', data: { node: undefined,                    value:    '\u007B'}, text: 'left brace'},
  { key: '40', data: { node: undefined,                    value:    '\u007D'}, text: 'right brace'},
  { key: '41', data: { node: undefined,                    value:    '\u230A'}, text: 'left floor'},
  { key: '42', data: { node: undefined,                    value:    '\u230B'}, text: 'right floor'},
  { key: '43', data: { node: undefined,                    value:    '\u2308'}, text: 'left ceiling'},
  { key: '44', data: { node: undefined,                    value:    '\u2309'}, text: 'right ceiling'},
  { key: '45', data: { node: undefined,                    value:    '\u0021'}, text: 'factorial'},
  { key: '46', data: { node: undefined,                    value:    '\u007C'}, text: 'absolute value brace'},
  { key: '47', data: { node: undefined,                    value:    '\u0394'}, text: 'delta'},
  { key: '48', data: { node: undefined,                    value:    '\u{1D452}'}, text: 'euler'},
  { key: '49', data: { node: undefined,                    value:    '\u03C6'}, text: 'phi'},
  { key: '50', data: { node: getEmptyLimNode,              value:    'lim'}, text: 'lim'},
  { key: '51', data: { node: undefined,                    value:    'log'}, text: 'log'},
  { key: '52', data: { node: undefined,                    value:    'ln'}, text: 'natural log'},
  { key: '53', data: { node: undefined,                    value:    'ln'}, text: 'ln'},
  { key: '54', data: { node: undefined,                    value:    'max'}, text: 'max'},
  { key: '55', data: { node: undefined,                    value:    'min'}, text: 'min'},
  { key: '56', data: { node: undefined,                    value:    'sin'}, text: 'sin'},
  { key: '57', data: { node: undefined,                    value:    'cos'}, text: 'cos'},
  { key: '58', data: { node: undefined,                    value:    'tan'}, text: 'tan'},
  { key: '59', data: { node: undefined,                    value:    'csc'}, text: 'csc'},
  { key: '60', data: { node: undefined,                    value:    'sec'}, text: 'sec'},
  { key: '61', data: { node: undefined,                    value:    'cot'}, text: 'cot'},
  { key: '62', data: { node: undefined,                    value:    'sinh'}, text: 'sinh'},
  { key: '63', data: { node: undefined,                    value:    'cosh'}, text: 'cosh'},
  { key: '64', data: { node: undefined,                    value:    'tanh'}, text: 'tanh'},
  { key: '65', data: { node: undefined,                    value:    'csch'}, text: 'csch'},
  { key: '66', data: { node: undefined,                    value:    'sech'}, text: 'sech'},
  { key: '67', data: { node: undefined,                    value:    'coth'}, text: 'coth'},
  { key: '68', data: { node: undefined,                    value:    '\u22c3'}, text: 'union'},
  { key: '69', data: { node: undefined,                    value:    '\u22c2'}, text: 'intersection'},
  { key: '70', data: { node: undefined,                    value:    '\u2227'}, text: 'and'},
  { key: '71', data: { node: undefined,                    value:    '\u2228'}, text: 'or'},
  { key: '72', data: { node: getEmptyUneditableBigOpNode,  value:    '\u222b'}, text: 'integral'},
  { key: '73', data: { node: getEmptyUneditableBigOpNode,  value:    '\u222c'}, text: 'double integral'},
  { key: '74', data: { node: getEmptyUneditableBigOpNode,  value:    '\u222d'}, text: 'triple integral'},
  { key: '75', data: { node: getEmptyUneditableBigOpNode,  value:    '\u2a0c'}, text: 'quadruple integral'},
  { key: '76', data: { node: getEmptyUneditableBigOpNode,  value:    '\u222e'}, text: 'contour integral'},
  { key: '77', data: { node: getEmptyUneditableBigOpNode,  value:    '\u222f'}, text: 'surface integral'},
  { key: '78', data: { node: getEmptyUneditableBigOpNode,  value:    '\u2230'}, text: 'volume integral'},
  { key: '79', data: { node: getEmptyUneditableBigOpNode,  value:    '\u2211'}, text: 'summation'},
  { key: '80', data: { node: getEmptyFractionNode,         value:    '\u00bc'}, text: 'fraction'},
  { key: '81', data: { node: getEmptyBigOpNode,            value:    'bigoperator'}, text: 'bigoperator'},
  { key: '82', data: { node: undefined,                    value:    '\u220f'}, text: 'product'},
  { key: '83', data: { node: undefined,                    value:    '\u2210'}, text: 'coproduct'},
  { key: '84', data: { node: getEmptyUneditableBigOpNode,                    value:    '\u22c3'}, text: 'union with limits'},
  { key: '85', data: { node: getEmptyUneditableBigOpNode,                    value:    '\u22c2'}, text: 'intersection with limits'},
  { key: '86', data: { node: getEmptyUneditableBigOpNode,                    value:    '\u2227'}, text: 'and with limits'},
  { key: '87', data: { node: getEmptyUneditableBigOpNode,                    value:    '\u2228'}, text: 'or with limits'},
];
