import React from 'react';

interface IText {
   title: string;
}

const Text = ({title}: IText) => {
   return <div>{title}</div>;
};

export default Text;

// import {StyleSheet, Text, TextProps} from 'react-native';
// import {useTheme} from '@context/theme.context';
// import Styles from '@styles';
// import colors from '@styles/colors.style';

// interface IProps extends TextProps {
//   children?: any;
//   color: 'textSecondary' | 'textPrimary' | 'primary' | 'secondary';
//   variant:
//     | 'body'
//     | 'body2'
//     | 'title'
//     | 'h1'
//     | 'h2'
//     | 'h3'
//     | 'h4'
//     | 'h5'
//     | 'h6'
//     | 'subTitle1'
//     | 'subTitle2';
//   align?: 'center';
//   fullWidth?: boolean;
// }

// const CustomText = ({
//   style,
//   color,
//   variant,
//   align,
//   fullWidth,
//   ...props
// }: IProps) => {
//   const {theme} = useTheme();

//   return (
//     <Text
//       style={StyleSheet.flatten([
//         styles.text,
//         {color: theme.palette.text.primary},
//         fullWidth && styles.fullWidth,
//         align === 'center' && styles.align,
//         color === 'primary' && styles.primary,
//         color === 'secondary' && styles.secondary,
//         color === 'textSecondary' && {color: theme.palette.text.secondary},
//         styleVariants[variant],
//         style,
//       ])}
//       {...props}
//     />
//   );
// };

// CustomText.defaultProps = {
//   variant: 'body',
//   color: 'textPrimary',
//   numberOfLines: 1,
// };

// const styles = StyleSheet.create({
//   fullWidth: {
//     flex: 1,
//   },
//   align: {
//     textAlign: 'center',
//   },
//   text: {
//     fontFamily: Styles.fontFamily.regular,
//     fontSize: Styles.fontSize.body,
//   },
//   primary: {
//     color: colors.primary.main,
//   },
//   secondary: {
//     color: colors.secondary.main,
//   },
// });

// const styleVariants = StyleSheet.create({
//   body: {
//     fontSize: Styles.fontSize.body,
//     lineHeight: 22,
//   },
//   body2: {
//     fontSize: Styles.fontSize.body2,
//     lineHeight: 20,
//   },
//   title: {
//     fontSize: Styles.fontSize.title,
//     fontFamily: Styles.fontFamily.semiBold,
//   },
//   subTitle1: {
//     fontSize: Styles.fontSize.subTitle1,
//     fontFamily: Styles.fontFamily.bold,
//     lineHeight: 22,
//   },
//   subTitle2: {
//     fontSize: Styles.fontSize.subTitle2,
//     fontFamily: Styles.fontFamily.semiBold,
//     lineHeight: 20,
//   },
//   h1: {
//     fontSize: Styles.fontSize.h1,
//     fontFamily: Styles.fontFamily.bold,
//   },
//   h2: {
//     fontSize: Styles.fontSize.h2,
//     fontFamily: Styles.fontFamily.regular,
//   },
//   h3: {
//     fontSize: Styles.fontSize.h3,
//     fontFamily: Styles.fontFamily.bold,
//   },
//   h4: {
//     fontSize: Styles.fontSize.h4,
//     fontFamily: Styles.fontFamily.medium,
//   },
//   h5: {
//     fontSize: Styles.fontSize.h5,
//     fontFamily: Styles.fontFamily.regular,
//   },
//   h6: {
//     fontSize: Styles.fontSize.h6,
//     fontFamily: Styles.fontFamily.semiBold,
//   },
// });

// export {CustomText as Text};
