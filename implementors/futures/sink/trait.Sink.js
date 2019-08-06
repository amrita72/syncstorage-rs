(function() {var implementors = {};
implementors["actix_codec"] = [{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"actix_codec/struct.Framed.html\" title=\"struct actix_codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_codec/trait.AsyncWrite.html\" title=\"trait actix_codec::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix_codec/trait.Encoder.html\" title=\"trait actix_codec::Encoder\">Encoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::<a class=\"type\" href=\"actix_codec/trait.Encoder.html#associatedtype.Error\" title=\"type actix_codec::Encoder::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_codec::framed::Framed"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"actix_codec/struct.FramedRead.html\" title=\"struct actix_codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a>,&nbsp;</span>",synthetic:false,types:["actix_codec::framed_read::FramedRead"]},{text:"impl&lt;T, E&gt; <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"actix_codec/struct.FramedWrite.html\" title=\"struct actix_codec::FramedWrite\">FramedWrite</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_codec/trait.AsyncWrite.html\" title=\"trait actix_codec::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"actix_codec/trait.Encoder.html\" title=\"trait actix_codec::Encoder\">Encoder</a>,&nbsp;</span>",synthetic:false,types:["actix_codec::framed_write::FramedWrite"]},];
implementors["futures"] = [];
implementors["hyper"] = [{text:"impl <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"hyper/body/struct.Sender.html\" title=\"struct hyper::body::Sender\">Sender</a>",synthetic:false,types:["hyper::body::body::Sender"]},];
implementors["tokio_sync"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.Sender.html\" title=\"struct tokio_sync::mpsc::Sender\">Sender</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::bounded::Sender"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.UnboundedSender.html\" title=\"struct tokio_sync::mpsc::UnboundedSender\">UnboundedSender</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedSender"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_sync/watch/struct.Sender.html\" title=\"struct tokio_sync::watch::Sender\">Sender</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::watch::Sender"]},];
implementors["tokio_udp"] = [{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_io/codec/encoder/trait.Encoder.html\" title=\"trait tokio_io::codec::encoder::Encoder\">Encoder</a>&gt; <a class=\"trait\" href=\"futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_udp/struct.UdpFramed.html\" title=\"struct tokio_udp::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:false,types:["tokio_udp::frame::UdpFramed"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
