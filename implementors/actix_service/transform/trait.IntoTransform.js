(function() {var implementors = {};
implementors["actix_cors"] = [{text:"impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_service/transform/trait.IntoTransform.html\" title=\"trait actix_service::transform::IntoTransform\">IntoTransform</a>&lt;<a class=\"struct\" href=\"actix_cors/struct.CorsFactory.html\" title=\"struct actix_cors::CorsFactory\">CorsFactory</a>, S&gt; for <a class=\"struct\" href=\"actix_cors/struct.Cors.html\" title=\"struct actix_cors::Cors\">Cors</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_service/trait.Service.html\" title=\"trait actix_service::Service\">Service</a>&lt;Request = <a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/service/struct.ServiceResponse.html\" title=\"struct actix_web::service::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_http/error/struct.Error.html\" title=\"struct actix_http::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"actix_service/trait.Service.html#associatedtype.Future\" title=\"type actix_service::Service::Future\">Future</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,&nbsp;</span>",synthetic:false,types:["actix_cors::Cors"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
