

const Login = () => {
    return (
        <div class="card">
            <div class="mb-3 ">
                <label  class="form-label">Email</label>
                <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div class="mb-3">
                <label  class="form-label">password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    )
}
export default Login;