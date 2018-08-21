import * as _F from 'formik';
//seems as though formik UMD module exports as Formik.*, so we get Formik.Formik (see alias.ts)
export as namespace Formik;
export = _F;
