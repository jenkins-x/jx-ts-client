package io.jenkinsx.jxtsclient;

import org.openapitools.codegen.languages.TypeScriptNodeClientCodegen;

public class TypeScriptNodeClientCodegenOverride extends TypeScriptNodeClientCodegen {

    private String[] prefixes;

    public TypeScriptNodeClientCodegenOverride() {
        String prefixesStr = System.getenv("GENERATOR_PREFIXES");
        this.prefixes = prefixesStr.split(",");
    }

    @Override
    public String toModelName(String name) {
        for (int i = 0; i < prefixes.length; i++) {
            name = trimPrefix(name, prefixes[i]);
        }
        return super.toModelName(name);
    }

    public static String trimPrefix(String s, String prefix)
    {
        if (s != null && prefix != null && s.startsWith(prefix)){
            return s.substring(prefix.length());
        }
        return s;
    }

    @Override
    public String getName() {
        return "typescript-node";
    }

}
