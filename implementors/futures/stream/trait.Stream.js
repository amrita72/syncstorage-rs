(function() {var implementors = {};
implementors["actix_codec"] = [{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_codec/struct.Framed.html\" title=\"struct actix_codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_codec/trait.AsyncRead.html\" title=\"trait actix_codec::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix_codec/trait.Decoder.html\" title=\"trait actix_codec::Decoder\">Decoder</a>,&nbsp;</span>",synthetic:false,types:["actix_codec::framed::Framed"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_codec/struct.FramedRead.html\" title=\"struct actix_codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_codec/trait.AsyncRead.html\" title=\"trait actix_codec::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"actix_codec/trait.Decoder.html\" title=\"trait actix_codec::Decoder\">Decoder</a>,&nbsp;</span>",synthetic:false,types:["actix_codec::framed_read::FramedRead"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_codec/struct.FramedWrite.html\" title=\"struct actix_codec::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>",synthetic:false,types:["actix_codec::framed_write::FramedWrite"]},];
implementors["actix_http"] = [{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"enum\" href=\"actix_http/body/enum.ResponseBody.html\" title=\"enum actix_http::body::ResponseBody\">ResponseBody</a>&lt;B&gt;",synthetic:false,types:["actix_http::body::ResponseBody"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_http/encoding/struct.Decoder.html\" title=\"struct actix_http::encoding::Decoder\">Decoder</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_http::encoding::decoder::Decoder"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"enum\" href=\"actix_http/enum.Payload.html\" title=\"enum actix_http::Payload\">Payload</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_http::payload::Payload"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_http/h1/struct.Payload.html\" title=\"struct actix_http::h1::Payload\">Payload</a>",synthetic:false,types:["actix_http::h1::payload::Payload"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_http/h2/struct.Payload.html\" title=\"struct actix_http::h2::Payload\">Payload</a>",synthetic:false,types:["actix_http::h2::Payload"]},];
implementors["actix_web"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/web/struct.Payload.html\" title=\"struct actix_web::web::Payload\">Payload</a>",synthetic:false,types:["actix_web::types::payload::Payload"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/dev/struct.Readlines.html\" title=\"struct actix_web::dev::Readlines\">Readlines</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"actix_web/trait.HttpMessage.html#associatedtype.Stream\" title=\"type actix_web::HttpMessage::Stream\">Stream</a>: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"actix_web/web/struct.Bytes.html\" title=\"struct actix_web::web::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"actix_web/client/enum.PayloadError.html\" title=\"enum actix_web::client::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_web::types::readlines::Readlines"]},];
implementors["awc"] = [{text:"impl&lt;S&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"awc/struct.ClientResponse.html\" title=\"struct awc::ClientResponse\">ClientResponse</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"awc/error/enum.PayloadError.html\" title=\"enum awc::error::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["awc::response::ClientResponse"]},];
implementors["futures"] = [];
implementors["h2"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"h2/client/struct.PushPromises.html\" title=\"struct h2::client::PushPromises\">PushPromises</a>",synthetic:false,types:["h2::client::PushPromises"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"h2/server/struct.Connection.html\" title=\"struct h2::server::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"bytes/buf/into_buf/trait.IntoBuf.html#associatedtype.Buf\" title=\"type bytes::buf::into_buf::IntoBuf::Buf\">Buf</a>: 'static,&nbsp;</span>",synthetic:false,types:["h2::server::Connection"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"h2/struct.RecvStream.html\" title=\"struct h2::RecvStream\">RecvStream</a>",synthetic:false,types:["h2::share::RecvStream"]},];
implementors["reqwest"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"reqwest/async/struct.Body.html\" title=\"struct reqwest::async::Body\">Body</a>",synthetic:false,types:["reqwest::async_impl::body::Body"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"reqwest/async/struct.Decoder.html\" title=\"struct reqwest::async::Decoder\">Decoder</a>",synthetic:false,types:["reqwest::async_impl::decoder::Decoder"]},];
implementors["tokio_buf"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_buf/trait.BufStream.html\" title=\"trait tokio_buf::BufStream\">BufStream</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_buf/util/struct.IntoStream.html\" title=\"struct tokio_buf::util::IntoStream\">IntoStream</a>&lt;T&gt;",synthetic:false,types:["tokio_buf::util::stream::IntoStream"]},];
implementors["tokio_io"] = [{text:"impl&lt;A&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Lines.html\" title=\"struct tokio_io::io::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>",synthetic:false,types:["tokio_io::lines::Lines"]},];
implementors["tokio_signal"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_signal/unix/struct.Signal.html\" title=\"struct tokio_signal::unix::Signal\">Signal</a>",synthetic:false,types:["tokio_signal::unix::Signal"]},];
implementors["tokio_sync"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.Receiver.html\" title=\"struct tokio_sync::mpsc::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::bounded::Receiver"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.UnboundedReceiver.html\" title=\"struct tokio_sync::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedReceiver"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/watch/struct.Receiver.html\" title=\"struct tokio_sync::watch::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::watch::Receiver"]},];
implementors["tokio_tcp"] = [{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_tcp/struct.Incoming.html\" title=\"struct tokio_tcp::Incoming\">Incoming</a>",synthetic:false,types:["tokio_tcp::incoming::Incoming"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/delay_queue/struct.DelayQueue.html\" title=\"struct tokio_timer::delay_queue::DelayQueue\">DelayQueue</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::delay_queue::DelayQueue"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/throttle/struct.Throttle.html\" title=\"struct tokio_timer::throttle::Throttle\">Throttle</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::throttle::Throttle"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/timeout/struct.Timeout.html\" title=\"struct tokio_timer::timeout::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>",synthetic:false,types:["tokio_timer::timeout::Timeout"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/struct.Interval.html\" title=\"struct tokio_timer::Interval\">Interval</a>",synthetic:false,types:["tokio_timer::interval::Interval"]},];
implementors["tokio_udp"] = [{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_io/codec/decoder/trait.Decoder.html\" title=\"trait tokio_io::codec::decoder::Decoder\">Decoder</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_udp/struct.UdpFramed.html\" title=\"struct tokio_udp::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:false,types:["tokio_udp::frame::UdpFramed"]},];
implementors["trust_dns_proto"] = [{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/tcp/struct.TcpClientStream.html\" title=\"struct trust_dns_proto::tcp::TcpClientStream\">TcpClientStream</a>&lt;S&gt;",synthetic:false,types:["trust_dns_proto::tcp::tcp_client_stream::TcpClientStream"]},{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/tcp/struct.TcpStream.html\" title=\"struct trust_dns_proto::tcp::TcpStream\">TcpStream</a>&lt;S&gt;",synthetic:false,types:["trust_dns_proto::tcp::tcp_stream::TcpStream"]},{text:"impl&lt;MF:&nbsp;<a class=\"trait\" href=\"trust_dns_proto/op/message/trait.MessageFinalizer.html\" title=\"trait trust_dns_proto::op::message::MessageFinalizer\">MessageFinalizer</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/udp/struct.UdpClientStream.html\" title=\"struct trust_dns_proto::udp::UdpClientStream\">UdpClientStream</a>&lt;MF&gt;",synthetic:false,types:["trust_dns_proto::udp::udp_client_stream::UdpClientStream"]},{text:"impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/udp/struct.UdpStream.html\" title=\"struct trust_dns_proto::udp::UdpStream\">UdpStream</a>",synthetic:false,types:["trust_dns_proto::udp::udp_stream::UdpStream"]},{text:"impl&lt;S, MF&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"trust_dns_proto/xfer/dns_multiplexer/struct.DnsMultiplexer.html\" title=\"struct trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexer\">DnsMultiplexer</a>&lt;S, MF&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"trust_dns_proto/xfer/trait.DnsClientStream.html\" title=\"trait trust_dns_proto::xfer::DnsClientStream\">DnsClientStream</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;MF: <a class=\"trait\" href=\"trust_dns_proto/op/message/trait.MessageFinalizer.html\" title=\"trait trust_dns_proto::op::message::MessageFinalizer\">MessageFinalizer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["trust_dns_proto::xfer::dns_multiplexer::DnsMultiplexer"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
