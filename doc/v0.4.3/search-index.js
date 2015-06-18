var searchIndex = {};
searchIndex['unix_socket'] = {"items":[[0,"","unix_socket","Support for Unix domain socket clients and servers.",null,null],[3,"SocketAddr","","An address associated with a Unix socket.",null,null],[3,"UnixStream","","A Unix stream socket.",null,null],[3,"UnixListener","","A structure representing a Unix domain socket server.",null,null],[3,"Incoming","","An iterator over incoming connections to a `UnixListener`.",null,null],[3,"UnixDatagram","","A Unix datagram socket.",null,null],[4,"AddressKind","","The kind of an address associated with a Unix socket.",null,null],[13,"Unnamed","","An unnamed address.",0,null],[13,"Pathname","","An address corresponding to a path on the filesystem.",0,null],[13,"Abstract","","An address in an abstract namespace unrelated to the filesystem.",0,null],[11,"clone","","",0,{"inputs":[{"name":"addresskind"}],"output":{"name":"addresskind"}}],[11,"fmt","","",0,{"inputs":[{"name":"addresskind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"socketaddr"}],"output":{"name":"socketaddr"}}],[11,"address","","Returns the value of the address.",1,{"inputs":[{"name":"socketaddr"}],"output":{"name":"addresskind"}}],[11,"fmt","","",1,{"inputs":[{"name":"socketaddr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"unixstream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"connect","","Connect to the socket named by `path`.",2,{"inputs":[{"name":"unixstream"},{"name":"p"}],"output":{"name":"result"}}],[11,"unnamed","","Create an unnamed pair of connected sockets.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"try_clone","","Create a new independently owned handle to the underlying socket.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this connection.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"peer_addr","","Returns the socket address of the remote half of this connection.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"set_read_timeout","","Sets the read timeout for the socket.",2,{"inputs":[{"name":"unixstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"set_write_timeout","","Sets the write timeout for the socket.",2,{"inputs":[{"name":"unixstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"read_timeout","","Returns the read timeout of this socket.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"write_timeout","","Returns the write timeout of this socket.",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"shutdown","","Shut down the read, write, or both halves of this connection.",2,{"inputs":[{"name":"unixstream"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"read","","",2,null],[11,"write","","",2,null],[11,"flush","","",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"result"}}],[11,"as_raw_fd","","",2,{"inputs":[{"name":"unixstream"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","Requires the `from_raw_fd` feature.",2,{"inputs":[{"name":"unixstream"},{"name":"rawfd"}],"output":{"name":"unixstream"}}],[11,"fmt","","",3,{"inputs":[{"name":"unixlistener"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Creates a new `UnixListener` which will be bound to the specified\nsocket.",3,{"inputs":[{"name":"unixlistener"},{"name":"p"}],"output":{"name":"result"}}],[11,"accept","","Accepts a new incoming connection to this listener.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"result"}}],[11,"try_clone","","Create a new independently owned handle to the underlying socket.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this connection.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"result"}}],[11,"incoming","","Returns an iterator over incoming connections.",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"incoming"}}],[11,"as_raw_fd","","",3,{"inputs":[{"name":"unixlistener"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","Requires the `from_raw_fd` feature.",3,{"inputs":[{"name":"unixlistener"},{"name":"rawfd"}],"output":{"name":"unixlistener"}}],[11,"fmt","","",4,{"inputs":[{"name":"incoming"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",4,{"inputs":[{"name":"incoming"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"fmt","","",5,{"inputs":[{"name":"unixdatagram"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Creates a Unix datagram socket from the given path.",5,{"inputs":[{"name":"unixdatagram"},{"name":"p"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the address of this socket.",5,{"inputs":[{"name":"unixdatagram"}],"output":{"name":"result"}}],[11,"recv_from","","Receives data from the socket.",5,null],[11,"send_to","","Sends data on the socket to the given address.",5,null],[11,"set_read_timeout","","Sets the read timeout for the socket.",5,{"inputs":[{"name":"unixdatagram"},{"name":"option"}],"output":{"name":"result"}}],[11,"set_write_timeout","","Sets the write timeout for the socket.",5,{"inputs":[{"name":"unixdatagram"},{"name":"option"}],"output":{"name":"result"}}],[11,"read_timeout","","Returns the read timeout of this socket.",5,{"inputs":[{"name":"unixdatagram"}],"output":{"name":"result"}}],[11,"write_timeout","","Returns the write timeout of this socket.",5,{"inputs":[{"name":"unixdatagram"}],"output":{"name":"result"}}],[11,"shutdown","","Shut down the read, write, or both halves of this connection.",5,{"inputs":[{"name":"unixdatagram"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"as_raw_fd","","",5,{"inputs":[{"name":"unixdatagram"}],"output":{"name":"rawfd"}}],[11,"from_raw_fd","","Requires the `from_raw_fd` feature.",5,{"inputs":[{"name":"unixdatagram"},{"name":"rawfd"}],"output":{"name":"unixdatagram"}}]],"paths":[[4,"AddressKind"],[3,"SocketAddr"],[3,"UnixStream"],[3,"UnixListener"],[3,"Incoming"],[3,"UnixDatagram"]]};
initSearch(searchIndex);
