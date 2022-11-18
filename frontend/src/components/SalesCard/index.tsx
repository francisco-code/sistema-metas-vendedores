import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {
    return (
        <div className="sismeta-card">
            <h2 className="sismeta-sales-tittle">Vendas</h2>
            <div>
                <div className="sismeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="sismeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="sismeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="sismeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="sismeta-tabela-container">
                    <thead>
                        <tr>
                            <th className="show-992">ID</th>
                            <th className="show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-992">Visitas</th>
                            <th className="show-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="show-992">#341</th>
                            <th className="show-576">16/11/2022</th>
                            <th>Cecília</th>
                            <th className="show-992">15</th>
                            <th className="show-992">11</th>
                            <th>R$ 52.000,00</th>
                            <th>
                                <div className="sismeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="show-992">#341</th>
                            <th className="show-576">16/11/2022</th>
                            <th>Andreia</th>
                            <th className="show-992">15</th>
                            <th className="show-992">11</th>
                            <th>R$ 120.000,00</th>
                            <th>
                                <div className="sismeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="show-992">#341</th>
                            <th className="show-576">16/11/2022</th>
                            <th>Ivone</th>
                            <th className="show-992">15</th>
                            <th className="show-992">11</th>
                            <th>R$ 200.000,00</th>
                            <th>
                                <div className="sismeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="show-992">#341</th>
                            <th className="show-576">16/11/2022</th>
                            <th>Lindalva</th>
                            <th className="show-992">15</th>
                            <th className="show-992">11</th>
                            <th>R$ 1.5000.000,00</th>
                            <th>
                                <div className="sismeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard