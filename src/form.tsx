namespace main {
  interface MyFormValues {
    firstName: string;
  }

  class MyApp extends React.Component<{}, {myState: string}> {
    constructor(props: {}) {
      super(props);
    }
    render() {
      return (
        <FF
          initialValues={{ firstName: "" }}
          onSubmit={(values: MyFormValues) => alert(JSON.stringify(values))}
          render={(formikBag: FormikProps<MyFormValues>) => (
            <Form>
              <Field
                name="firstName"
                validate={(value: any) => {
                  if (value === "") return "empty";
                  return "";
                }}
                render={({ field, form }: FieldProps<MyFormValues>) => (
                  <>
                    <div>
                      <input type="text" {...field} placeholder="First Name" />
                    </div>
                    <div style={{ color: "red" }}>
                      {form.touched.firstName &&
                        form.errors.firstName &&
                        form.errors.firstName}
                    </div>
                  </>
                )}
              />
            </Form>
          )}
        />
      );
    }
  }

  ReactDOM.render(<MyApp />, document.getElementById("root"));
}
