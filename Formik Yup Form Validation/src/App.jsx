import { useFormik } from "formik/dist"
import * as Yup from 'yup'

const App = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      content: ''
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      name: Yup.string().required('isim alani bos').min(3, 'en az 3 karakter').max(10, 'en cok 10 karakter'),
      surname: Yup.string().required('soyad alani bos'),
      email: Yup.string().email('lutfen gecerli bir email adresi girniz').required('eposta alani bos'),
      phone: Yup.number().typeError('lutfen sadece sayi giriniz').required('telefon alani bos'),
      content: Yup.string().required('content alani bos').min(15, 'en az 15 karakter').max(50, 'en cok 50 karakter')
    }),
    onSubmit: (values) => {
      console.log('FORM SUBMITED => ', { values })
    }
  })

  return (
    <div className="container mx-auto my-20 flex gap-20">
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto bg-white border border-slate-300 p-8 box-border rounded-md">

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            placeholder="Name"
            className="border border-slate-300 rounded-md h-[45px] px-4"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && <span className="text-xs text-red-500">{formik.errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-slate-700">Surname</span>
          <input
            placeholder="Surname"
            className="border border-slate-300 rounded-md h-[45px] px-4"
            {...formik.getFieldProps('surname')}
          />
          {formik.touched.surname && formik.errors.surname && <span className="text-xs text-red-500">{formik.errors.surname}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-slate-700">E-mail</span>
          <input
            placeholder="E-mail"
            className="border border-slate-300 rounded-md h-[45px] px-4"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && <span className="text-xs text-red-500">{formik.errors.email}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-slate-700">Phone</span>
          <input
            placeholder="Phone"
            className="border border-slate-300 rounded-md h-[45px] px-4"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone && <span className="text-xs text-red-500">{formik.errors.phone}</span>}
        </div>

        <div className="flex flex-col col-span-2 gap-1">
          <span className="text-sm font-medium text-slate-700">Content</span>
          <textarea
            placeholder="Content"
            className="min-h-[200px] border border-slate-300 rounded-md h-[45px] p-4"
            {...formik.getFieldProps('content')}
          ></textarea>
          {formik.touched.content && formik.errors.content && <span className="text-xs text-red-500">{formik.errors.content}</span>}
        </div>

        <button
          type="submit"
          className="h-[50px] bg-purple-400 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded-md font-medium">
          Send
        </button>
      </form>

      <div className="flex-1 bg-white border border-slate-300 p-4 box-border text-xs">
        <pre>
          <code>
            {JSON.stringify(formik, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default App