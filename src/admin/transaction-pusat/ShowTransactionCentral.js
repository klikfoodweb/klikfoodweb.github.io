import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let jumlahProdukNya = 0;

class ShowTransactionCentral extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			transaksi: [],
			details: []
		}
	}

	componentWillMount() {
		axios.get(`https://api.klikfood.id/index.php/transaksipusat/show/`+this.props.match.params.id, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	this.setState({
		  		products: response.data.data.produk,
		  		transaksi: response.data.data.transaksi,
		  		details: response.data.data.transaksi.detail
		  	})
		  }).catch((error) => {
		  	toast.error("Gagal Mendapatkan Info Transaksi :(");
		  });
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	render() {
		return (
			<div>
			<ToastContainer />
				<div className="row clearfix">
				  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				    <div className="card">
				      <div className="header">
				        <h2>
				          Detail Transaksi Pusat
				        </h2>
				      </div>
				      <div className="body">
				      { 
				      	(this.state.transaksi !== 0) ? 
				      	<React.Fragment>
				      	<label>ID Transaksi = </label>  { this.state.transaksi._id }
				        <br />
				        <label>Harga Keseluruhan = </label> Rp. { this.state.transaksi.jumlah_keseluruhan }
				        <br />
				        <label>Nama Pemesan = </label> { this.state.transaksi.user_name }
				        <br />
				        <label>Kota Tujuan = </label> { this.state.transaksi.detail_address } { this.state.transaksi.address }
				        <br />
				        <label>Status / Bukti Bayar = </label>
				        <br />
				        {
				        	(this.state.payment_type === 'TF') ?
				        		<React.Fragment>
				        		{
				        			(typeof this.state.transaksi.bayar !== 'undefined') ?
						        		<React.Fragment>
						        		<b>Sudah Dibayar</b>
						        		<br/>
						        		<img src={"https://api.klikfood.id/uploads/buktitf/"+this.props.match.params.id+"/"+this.state.transaksi.bayar} style={{maxHeight: '150px'}} alt />
						        		</React.Fragment>
						        	:
						        		<b>Belum Dibayar</b>
				        		}
				        		</React.Fragment>
				        	: (this.state.payment_type === 'VA') ?
				        		<React.Fragment>
				        		{
				        			(typeof this.state.transaksi.bayar !== 'undefined') ?
						        		<React.Fragment>
						        			<b>Sudah Dibayar</b>
						        		</React.Fragment>
						        	:
						        		<b>Belum Dibayar</b>
				        		}
				        		</React.Fragment>
				        	: (this.state.payment_type === 'CC') ?
				        		<React.Fragment>
				        		{
				        			(typeof this.state.transaksi.bayar !== 'undefined') ?
						        		<React.Fragment>
						        			<b>Sudah Dibayar</b>
						        		</React.Fragment>
						        	:
						        		<b>Belum Dibayar</b>
				        		}
				        		</React.Fragment>
				        	: null
				        }
				        <br />
				        <label>Detail Produk Yang Dipesan</label>
				        {
				        	this.state.details.map((item,i) => {
				        		jumlahProdukNya = jumlahProdukNya + Number(item.jumlah);
				        		return <div key={i}>{ this.state.products[i].name } ={ item.jumlah }</div>
				        	})
				        }
				        <label>Jumlah Produk Dipesan</label> <span>{jumlahProdukNya}</span>
				        </React.Fragment>
				        : null
				      }
				        <div className="table-responsive">
				        	<BootstrapTable data={this.state.products} striped search pagination hover>
	                  		  <TableHeaderColumn dataField='id' isKey={ true } hidden>User ID</TableHeaderColumn>
				        	  <TableHeaderColumn dataField="any" dataFormat={this.indexN} width='80'>No</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='berat_kemasan' dataSort={true}>Berat Kemasan</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='expire' dataSort={true}>Kadaluarsa</TableHeaderColumn>
				        	  <TableHeaderColumn dataField='harga_supplyer' dataSort={true}>Harga Pemasok</TableHeaderColumn>
		                  	</BootstrapTable>  
				        </div>
    
						<button onClick={ (e) => {
							e.preventDefault();
							axios.get(`https://api.klikfood.id/index.php/transaksipusat/konfirmasi_bayar/`+this.props.match.params.id, { 'headers': { 'Authorization': sessionStorage.api_token } })
							  .then((response) => {
							  	toast.success("Berhasil Di Verifikasi !");
						      	setTimeout(() => {
						      		window.location.href='/admin/transaction-central/verification';
						      	}, 3000)
							  }).catch((error) => {
							  	console.log(error)
							  	toast.error("Something Went Wrong :(");
							  })
						} } className="btn btn-warning">
						{
							(sessionStorage.role === 'CFO') ?
								<div>Verifikasi Pembayaran</div>
							: (sessionStorage.role === 'COO') ?
								<div>Kirim Barang</div>
								: null
						}
						</button>
					
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
export default ShowTransactionCentral;